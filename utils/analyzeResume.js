async function analyzeResume(resumeText, jobDescription) {
  const systemPrompt = `You are an expert resume analyzer with deep knowledge of recruitment and applicant tracking systems (ATS).

Analyze the provided resume against the job description and return a JSON response with:
1. compatibilityScore: A percentage (0-100) indicating how well the resume matches the job
2. skills: Array of key skills extracted from the resume
3. missingKeywords: Array of important keywords from the job description that are missing in the resume
4. suggestions: Array of 5-7 actionable improvement suggestions

Format: Return ONLY valid JSON, no markdown formatting.`;

  const userPrompt = `Resume:\n${resumeText}\n\nJob Description:\n${jobDescription}`;

  let response = await invokeAIAgent(systemPrompt, userPrompt);
  response = response.replace(/```json/g, '').replace(/```/g, '').trim();
  
  return JSON.parse(response);
}