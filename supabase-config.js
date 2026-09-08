// =========================================================
// Configuração do Supabase
// Preencha com os dados do seu projeto (Project Settings > API)
// =========================================================
const SUPABASE_URL = "https://bpolmdqnvbxmezgubgab.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_XAuUHSFiCCaUpPPPE3e13w_muEkqf2-";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY,
);
