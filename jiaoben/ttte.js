
var objc = JSON.parse($response.body);
      
    objc = 
{
  "request_date": "2022-01-19T22:06:20Z",
  "request_date_ms": 1642629980583,
  "subscriber": {
    "entitlements": {
      "ttte.ipa.translationService": {
        "expires_date": "2032-01-19T23:00:30Z",
        "grace_period_expires_date": null,
        "product_identifier": "ttte.ipa.translationService.yearly",
        "purchase_date": "2022-01-19T22:00:30Z"
      }
    },
    "first_seen": "2021-12-11T18:29:31Z",
    "last_seen": "2022-01-19T14:12:25Z",
    "management_url": "itms-apps://apps.apple.com/account/subscriptions",
    "non_subscriptions": {
      "ttte.iap.fullVersion": [{
        "id": "e3cb085ba7",
        "is_sandbox": true,
        "original_purchase_date": "2021-12-11T21:22:25Z",
        "purchase_date": "2021-12-11T21:22:25Z",
        "store": "app_store"
      }]
    },
    "original_app_user_id": "$RCAnonymousID:6b86b95ee8c54556a8525332ccf66d07",
    "original_application_version": "1.0",
    "original_purchase_date": "2013-08-01T07:00:00Z",
    "other_purchases": {
      "ttte.iap.fullVersion": {
        "purchase_date": "2021-12-11T21:22:25Z"
      }
    },
    "subscriptions": {
      "ttte.ipa.translationService.monthly": {
        "billing_issues_detected_at": null,
        "expires_date": "2032-01-18T23:18:15Z",
        "grace_period_expires_date": null,
        "is_sandbox": true,
        "original_purchase_date": "2022-01-18T23:13:17Z",
        "ownership_type": "PURCHASED",
        "period_type": "normal",
        "purchase_date": "2022-01-18T23:13:15Z",
        "store": "app_store",
        "unsubscribe_detected_at": null
      },
      "ttte.ipa.translationService.yearly": {
        "billing_issues_detected_at": null,
        "expires_date": "2032-01-19T23:00:30Z",
        "grace_period_expires_date": null,
        "is_sandbox": true,
        "original_purchase_date": "2022-01-19T22:00:33Z",
        "ownership_type": "PURCHASED",
        "period_type": "normal",
        "purchase_date": "2022-01-19T22:00:30Z",
        "store": "app_store",
        "unsubscribe_detected_at": null
      }
    }
  }
};

$done({body : JSON.stringify(objc)});
