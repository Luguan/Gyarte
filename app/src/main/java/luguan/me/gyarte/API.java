package luguan.me.gyarte;

import retrofit.GsonConverterFactory;
import retrofit.Retrofit;

/**
 * Created by lulle on 12/4/2015.
 */
public class API {
    public  final String BASE_URL = "http://192.168.1.100:3000";

    Retrofit retrofit = new Retrofit.Builder()
            .baseUrl(BASE_URL)
            .addConverterFactory(GsonConverterFactory.create())
            .build();

    public  ApiInterface getApiService() {
        return apiService;
    }

    ApiInterface apiService = retrofit.create(ApiInterface.class);
}