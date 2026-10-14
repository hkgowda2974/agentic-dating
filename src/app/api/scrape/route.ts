import { NextRequest, NextResponse } from 'next/server';
import { scrapePublicProfiles, synthesizeAgentFromSources } from '@/lib/scraper';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { linkedinUrl, instagramUrl } = body;

    if (!linkedinUrl || !instagramUrl) {
      return NextResponse.json(
        { error: 'Both a LinkedIn and public Instagram URL are required.' },
        { status: 400 }
      );
    }

    const raw = await scrapePublicProfiles(linkedinUrl, instagramUrl);
    const synthesizedPerson = synthesizeAgentFromSources(raw);

    return NextResponse.json({
      success: true,
      person: synthesizedPerson
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Failed to process social profiles';
    console.error('Scrape API error:', message);
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}
