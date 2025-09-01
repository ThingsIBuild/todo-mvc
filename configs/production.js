
export default {
    env:'production',
    db_url:process.env.DB_URI_PROD,
    PORT:process.env.PORT || 8000,
    debug:false
}

