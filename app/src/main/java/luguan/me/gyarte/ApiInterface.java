package luguan.me.gyarte;

import luguan.me.gyarte.response.LoginResponse;
import luguan.me.gyarte.response.PupilsResponse;
import retrofit.Call;
import retrofit.http.Body;
import retrofit.http.POST;

/**
 * Created by lulle on 12/4/2015.
 */
public interface ApiInterface {
    // Request method and URL specified in the annotation
    // Callback for the parsed response is the last parameter

    @POST("/login")
    Call<LoginResponse> login(@Body User user);

    @POST("/pupilList")
    Call<PupilsResponse> getPupils(@Body GetPupils pupil);
}
