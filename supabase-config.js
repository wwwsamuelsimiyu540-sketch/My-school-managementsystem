// MY SCHOOL SYSTEM — SUPABASE CONNECTION

const SUPABASE_URL = "https://apshhzczrofxwjsgenlv.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_I6kPWgrxTxCgo_EUCGucLA_LtiJXtyP";

// Load the Supabase JavaScript library
const supabaseScript = document.createElement("script");
supabaseScript.src =
  "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2";

supabaseScript.onload = function () {
  window.supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
  );

  console.log("Supabase connection initialized.");
};

document.head.appendChild(supabaseScript);
