//if ((!question_arry[question]) || (question_arry[question].match(/\*}}$/))) {
if ((!question_arry[question]) || (question.match(/\*}}$/))) {

//openai_call(llm_prompt)
openai_call(llm_prompt.substring(llm_prompt.length - 16000*4))