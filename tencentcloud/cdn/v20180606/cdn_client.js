/*
 * Copyright (c) 2018 THL A29 Limited, a Tencent company. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const DescribeCdnDomainLogsResponse = models.DescribeCdnDomainLogsResponse;
const DescribeCdnDomainLogsRequest = models.DescribeCdnDomainLogsRequest;
const Compression = models.Compression;
const ResourceData = models.ResourceData;
const UrlRecord = models.UrlRecord;
const Authentication = models.Authentication;
const Https = models.Https;
const DescribeTrafficPackagesRequest = models.DescribeTrafficPackagesRequest;
const PurgePathCacheResponse = models.PurgePathCacheResponse;
const DomainFilter = models.DomainFilter;
const SpecificConfig = models.SpecificConfig;
const FollowRedirect = models.FollowRedirect;
const RequestHeader = models.RequestHeader;
const HttpHeaderPathRule = models.HttpHeaderPathRule;
const Referer = models.Referer;
const AdvanceCacheRule = models.AdvanceCacheRule;
const DeleteCdnDomainRequest = models.DeleteCdnDomainRequest;
const DescribePayTypeResponse = models.DescribePayTypeResponse;
const ListTopDataRequest = models.ListTopDataRequest;
const DescribeDomainsResponse = models.DescribeDomainsResponse;
const CompressionRule = models.CompressionRule;
const Origin = models.Origin;
const EnableCachesRequest = models.EnableCachesRequest;
const DescribeBillingDataRequest = models.DescribeBillingDataRequest;
const SimpleCache = models.SimpleCache;
const TopDetailData = models.TopDetailData;
const UpdatePayTypeResponse = models.UpdatePayTypeResponse;
const DescribeDomainsConfigResponse = models.DescribeDomainsConfigResponse;
const BriefDomain = models.BriefDomain;
const ResponseHeaderCache = models.ResponseHeaderCache;
const TrafficPackage = models.TrafficPackage;
const DescribeCdnIpRequest = models.DescribeCdnIpRequest;
const Ipv6 = models.Ipv6;
const StatusCodeCache = models.StatusCodeCache;
const DescribeIpVisitResponse = models.DescribeIpVisitResponse;
const OverseaConfig = models.OverseaConfig;
const AddCdnDomainRequest = models.AddCdnDomainRequest;
const ErrorPage = models.ErrorPage;
const MaxAgeRule = models.MaxAgeRule;
const DescribePayTypeRequest = models.DescribePayTypeRequest;
const DescribeDomainsConfigRequest = models.DescribeDomainsConfigRequest;
const AdvancedCache = models.AdvancedCache;
const StartCdnDomainRequest = models.StartCdnDomainRequest;
const MapInfo = models.MapInfo;
const AuthenticationTypeD = models.AuthenticationTypeD;
const AuthenticationTypeC = models.AuthenticationTypeC;
const AuthenticationTypeB = models.AuthenticationTypeB;
const AuthenticationTypeA = models.AuthenticationTypeA;
const DescribePushTasksResponse = models.DescribePushTasksResponse;
const ResourceOriginData = models.ResourceOriginData;
const AddCdnDomainResponse = models.AddCdnDomainResponse;
const ServerCert = models.ServerCert;
const DisableCachesRequest = models.DisableCachesRequest;
const SimpleCacheRule = models.SimpleCacheRule;
const DetailDomain = models.DetailDomain;
const GetDisableRecordsResponse = models.GetDisableRecordsResponse;
const CdnIpHistory = models.CdnIpHistory;
const SummarizedData = models.SummarizedData;
const UpdatePayTypeRequest = models.UpdatePayTypeRequest;
const Cache = models.Cache;
const ForceRedirect = models.ForceRedirect;
const DescribeOriginDataRequest = models.DescribeOriginDataRequest;
const RangeOriginPull = models.RangeOriginPull;
const ViolationUrl = models.ViolationUrl;
const PushUrlsCacheRequest = models.PushUrlsCacheRequest;
const MainlandConfig = models.MainlandConfig;
const DescribePushTasksRequest = models.DescribePushTasksRequest;
const DescribeUrlViolationsRequest = models.DescribeUrlViolationsRequest;
const RefererRule = models.RefererRule;
const IpFreqLimit = models.IpFreqLimit;
const DownstreamCapping = models.DownstreamCapping;
const CacheOptResult = models.CacheOptResult;
const StopCdnDomainRequest = models.StopCdnDomainRequest;
const DescribeMapInfoResponse = models.DescribeMapInfoResponse;
const DescribeTrafficPackagesResponse = models.DescribeTrafficPackagesResponse;
const DescribeMapInfoRequest = models.DescribeMapInfoRequest;
const EnableCachesResponse = models.EnableCachesResponse;
const DescribeIpVisitRequest = models.DescribeIpVisitRequest;
const StatusCodeCacheRule = models.StatusCodeCacheRule;
const ClientCert = models.ClientCert;
const DomainLog = models.DomainLog;
const GetDisableRecordsRequest = models.GetDisableRecordsRequest;
const PurgeUrlsCacheResponse = models.PurgeUrlsCacheResponse;
const ResponseHeader = models.ResponseHeader;
const DescribeBillingDataResponse = models.DescribeBillingDataResponse;
const DisableCachesResponse = models.DisableCachesResponse;
const DescribeCdnIpResponse = models.DescribeCdnIpResponse;
const DescribeCdnDataResponse = models.DescribeCdnDataResponse;
const CacheKey = models.CacheKey;
const TopData = models.TopData;
const CappingRule = models.CappingRule;
const Seo = models.Seo;
const BandwidthAlert = models.BandwidthAlert;
const RegionMapRelation = models.RegionMapRelation;
const PurgePathCacheRequest = models.PurgePathCacheRequest;
const CdnData = models.CdnData;
const PurgeUrlsCacheRequest = models.PurgeUrlsCacheRequest;
const OriginPullOptimization = models.OriginPullOptimization;
const PushTask = models.PushTask;
const TimestampData = models.TimestampData;
const StartCdnDomainResponse = models.StartCdnDomainResponse;
const ResourceBillingData = models.ResourceBillingData;
const Sort = models.Sort;
const DescribePurgeTasksRequest = models.DescribePurgeTasksRequest;
const PushUrlsCacheResponse = models.PushUrlsCacheResponse;
const StopCdnDomainResponse = models.StopCdnDomainResponse;
const ListTopDataResponse = models.ListTopDataResponse;
const MaxAge = models.MaxAge;
const UpdateDomainConfigResponse = models.UpdateDomainConfigResponse;
const UpdateDomainConfigRequest = models.UpdateDomainConfigRequest;
const VideoSeek = models.VideoSeek;
const Compatibility = models.Compatibility;
const DescribeUrlViolationsResponse = models.DescribeUrlViolationsResponse;
const IpFilter = models.IpFilter;
const DescribePurgeTasksResponse = models.DescribePurgeTasksResponse;
const ErrorPageRule = models.ErrorPageRule;
const DescribeOriginDataResponse = models.DescribeOriginDataResponse;
const PurgeTask = models.PurgeTask;
const OriginPullTimeout = models.OriginPullTimeout;
const DeleteCdnDomainResponse = models.DeleteCdnDomainResponse;
const CdnIp = models.CdnIp;
const DescribeCdnDataRequest = models.DescribeCdnDataRequest;
const DescribeDomainsRequest = models.DescribeDomainsRequest;


/**
 * cdn client
 * @class
 */
class CdnClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("cdn.tencentcloudapi.com", "2018-06-06", credential, region, profile);
    }
    
    /**
     * DescribeMapInfo 用于查询省份对应的 ID，运营商对应的 ID 信息。
     * @param {DescribeMapInfoRequest} req
     * @param {function(string, DescribeMapInfoResponse):void} cb
     * @public
     */
    DescribeMapInfo(req, cb) {
        let resp = new DescribeMapInfoResponse();
        this.request("DescribeMapInfo", req, resp, cb);
    }

    /**
     * DeleteCdnDomain 用于删除指定加速域名
     * @param {DeleteCdnDomainRequest} req
     * @param {function(string, DeleteCdnDomainResponse):void} cb
     * @public
     */
    DeleteCdnDomain(req, cb) {
        let resp = new DeleteCdnDomainResponse();
        this.request("DeleteCdnDomain", req, resp, cb);
    }

    /**
     * DescribePurgeTasks 用于查询提交的 URL 刷新、目录刷新记录及执行进度，通过 PurgePathCache 与 PurgeUrlsCache 接口提交的任务均可通过此接口进行查询。
     * @param {DescribePurgeTasksRequest} req
     * @param {function(string, DescribePurgeTasksResponse):void} cb
     * @public
     */
    DescribePurgeTasks(req, cb) {
        let resp = new DescribePurgeTasksResponse();
        this.request("DescribePurgeTasks", req, resp, cb);
    }

    /**
     * DescribePayType 用于查询用户的计费类型，计费周期等信息。
     * @param {DescribePayTypeRequest} req
     * @param {function(string, DescribePayTypeResponse):void} cb
     * @public
     */
    DescribePayType(req, cb) {
        let resp = new DescribePayTypeResponse();
        this.request("DescribePayType", req, resp, cb);
    }

    /**
     * DescribeDomainsConfig 用于查询内容分发网络加速域名（含境内、境外）的所有配置信息。
     * @param {DescribeDomainsConfigRequest} req
     * @param {function(string, DescribeDomainsConfigResponse):void} cb
     * @public
     */
    DescribeDomainsConfig(req, cb) {
        let resp = new DescribeDomainsConfigResponse();
        this.request("DescribeDomainsConfig", req, resp, cb);
    }

    /**
     * AddCdnDomain 用于新增内容分发网络加速域名。
     * @param {AddCdnDomainRequest} req
     * @param {function(string, AddCdnDomainResponse):void} cb
     * @public
     */
    AddCdnDomain(req, cb) {
        let resp = new AddCdnDomainResponse();
        this.request("AddCdnDomain", req, resp, cb);
    }

    /**
     * DescribeIpVisit 用于查询 5 分钟活跃用户数，及日活跃用户数明细

+ 5 分钟活跃用户数：根据日志中客户端 IP，5 分钟粒度去重统计
+ 日活跃用户数：根据日志中客户端 IP，按天粒度去重统计
     * @param {DescribeIpVisitRequest} req
     * @param {function(string, DescribeIpVisitResponse):void} cb
     * @public
     */
    DescribeIpVisit(req, cb) {
        let resp = new DescribeIpVisitResponse();
        this.request("DescribeIpVisit", req, resp, cb);
    }

    /**
     * DescribeCdnData 用于查询 CDN 实时访问监控数据，支持以下指标查询：

+ 流量（单位为 byte）
+ 带宽（单位为 bps）
+ 请求数（单位为 次）
+ 流量命中率（单位为 %，小数点后保留两位）
+ 状态码 2xx 汇总及各 2 开头状态码明细（单位为 个）
+ 状态码 3xx 汇总及各 3 开头状态码明细（单位为 个）
+ 状态码 4xx 汇总及各 4 开头状态码明细（单位为 个）
+ 状态码 5xx 汇总及各 5 开头状态码明细（单位为 个）
     * @param {DescribeCdnDataRequest} req
     * @param {function(string, DescribeCdnDataResponse):void} cb
     * @public
     */
    DescribeCdnData(req, cb) {
        let resp = new DescribeCdnDataResponse();
        this.request("DescribeCdnData", req, resp, cb);
    }

    /**
     * DisableCaches 用于禁用 CDN 上指定 URL 的访问，禁用完成后，全网访问会直接返回 403。（接口尚在内测中，暂未全量开放使用）
     * @param {DisableCachesRequest} req
     * @param {function(string, DisableCachesResponse):void} cb
     * @public
     */
    DisableCaches(req, cb) {
        let resp = new DisableCachesResponse();
        this.request("DisableCaches", req, resp, cb);
    }

    /**
     * DescribeDomains 用于查询内容分发网络加速域名（含境内、境外）基本配置信息，包括项目ID、服务状态，业务类型、创建时间、更新时间等信息。
     * @param {DescribeDomainsRequest} req
     * @param {function(string, DescribeDomainsResponse):void} cb
     * @public
     */
    DescribeDomains(req, cb) {
        let resp = new DescribeDomainsResponse();
        this.request("DescribeDomains", req, resp, cb);
    }

    /**
     * StartCdnDomain 用于启用已停用域名的加速服务
     * @param {StartCdnDomainRequest} req
     * @param {function(string, StartCdnDomainResponse):void} cb
     * @public
     */
    StartCdnDomain(req, cb) {
        let resp = new StartCdnDomainResponse();
        this.request("StartCdnDomain", req, resp, cb);
    }

    /**
     * StopCdnDomain 用于停止域名的加速服务。
注意：停止加速服务后，访问至加速节点的请求将会直接返回 404。为避免对您的业务造成影响，请在停止加速服务前将解析切走。
     * @param {StopCdnDomainRequest} req
     * @param {function(string, StopCdnDomainResponse):void} cb
     * @public
     */
    StopCdnDomain(req, cb) {
        let resp = new StopCdnDomainResponse();
        this.request("StopCdnDomain", req, resp, cb);
    }

    /**
     * ListTopData 通过入参 Metric 和 Filter 组合不同，可以查询以下排序数据：

+ 依据总流量、总请求数对访问 URL 排序，从大至小返回 TOP 1000 URL
+ 依据总流量、总请求数对客户端省份排序，从大至小返回省份列表
+ 依据总流量、总请求数对客户端运营商排序，从大至小返回运营商列表
+ 依据总流量、峰值带宽、总请求数、平均命中率、2XX/3XX/4XX/5XX 状态码对域名排序，从大至小返回域名列表
+ 依据总回源流量、回源峰值带宽、总回源请求数、平均回源失败率、2XX/3XX/4XX/5XX 回源状态码对域名排序，从大至小返回域名列表

注意：仅支持 90 天内数据查询
     * @param {ListTopDataRequest} req
     * @param {function(string, ListTopDataResponse):void} cb
     * @public
     */
    ListTopData(req, cb) {
        let resp = new ListTopDataResponse();
        this.request("ListTopData", req, resp, cb);
    }

    /**
     * DescribeOriginData 用于查询 CDN 实时回源监控数据，支持以下指标查询：

+ 回源流量（单位为 byte）
+ 回源带宽（单位为 bps）
+ 回源请求数（单位为 次）
+ 回源失败请求数（单位为 次）
+ 回源失败率（单位为 %，小数点后保留两位）
+ 回源状态码 2xx 汇总及各 2 开头回源状态码明细（单位为 个）
+ 回源状态码 3xx 汇总及各 3 开头回源状态码明细（单位为 个）
+ 回源状态码 4xx 汇总及各 4 开头回源状态码明细（单位为 个）
+ 回源状态码 5xx 汇总及各 5 开头回源状态码明细（单位为 个）
     * @param {DescribeOriginDataRequest} req
     * @param {function(string, DescribeOriginDataResponse):void} cb
     * @public
     */
    DescribeOriginData(req, cb) {
        let resp = new DescribeOriginDataResponse();
        this.request("DescribeOriginData", req, resp, cb);
    }

    /**
     * DescribeCdnIp 用于查询 CDN IP 归属。
     * @param {DescribeCdnIpRequest} req
     * @param {function(string, DescribeCdnIpResponse):void} cb
     * @public
     */
    DescribeCdnIp(req, cb) {
        let resp = new DescribeCdnIpResponse();
        this.request("DescribeCdnIp", req, resp, cb);
    }

    /**
     * PurgePathCache 用于批量提交目录刷新，根据域名的加速区域进行对应区域的刷新。
默认情况下境内、境外加速区域每日目录刷新额度为各 100 条，每次最多可提交 20 条。
     * @param {PurgePathCacheRequest} req
     * @param {function(string, PurgePathCacheResponse):void} cb
     * @public
     */
    PurgePathCache(req, cb) {
        let resp = new PurgePathCacheResponse();
        this.request("PurgePathCache", req, resp, cb);
    }

    /**
     * DescribeUrlViolations 用于查询被 CDN 系统扫描到的域名违规 URL 列表及当前状态。
对应内容分发网络控制台【图片鉴黄】页面。
     * @param {DescribeUrlViolationsRequest} req
     * @param {function(string, DescribeUrlViolationsResponse):void} cb
     * @public
     */
    DescribeUrlViolations(req, cb) {
        let resp = new DescribeUrlViolationsResponse();
        this.request("DescribeUrlViolations", req, resp, cb);
    }

    /**
     * PurgeUrlsCache 用于批量提交 URL 进行刷新，根据 URL 中域名的当前加速区域进行对应区域的刷新。
默认情况下境内、境外加速区域每日 URL 刷新额度各为 10000 条，每次最多可提交 1000 条。
     * @param {PurgeUrlsCacheRequest} req
     * @param {function(string, PurgeUrlsCacheResponse):void} cb
     * @public
     */
    PurgeUrlsCache(req, cb) {
        let resp = new PurgeUrlsCacheResponse();
        this.request("PurgeUrlsCache", req, resp, cb);
    }

    /**
     * DescribeTrafficPackages 用于查询境内 CDN 流量包详情。
     * @param {DescribeTrafficPackagesRequest} req
     * @param {function(string, DescribeTrafficPackagesResponse):void} cb
     * @public
     */
    DescribeTrafficPackages(req, cb) {
        let resp = new DescribeTrafficPackagesResponse();
        this.request("DescribeTrafficPackages", req, resp, cb);
    }

    /**
     * UpdateDomainConfig 用于修改内容分发网络加速域名配置信息
注意：如果需要更新复杂类型的配置项，必须传递整个对象的所有属性，未传递的属性将使用默认值，建议通过查询接口获取配置属性后，直接修改后传递给本接口。Https配置由于证书的特殊性，更新时不用传递证书和密钥字段。
     * @param {UpdateDomainConfigRequest} req
     * @param {function(string, UpdateDomainConfigResponse):void} cb
     * @public
     */
    UpdateDomainConfig(req, cb) {
        let resp = new UpdateDomainConfigResponse();
        this.request("UpdateDomainConfig", req, resp, cb);
    }

    /**
     * DescribeCdnDomainLogs 用于查询访问日志下载地址，仅支持 30 天以内的境内、境外访问日志下载链接查询。
     * @param {DescribeCdnDomainLogsRequest} req
     * @param {function(string, DescribeCdnDomainLogsResponse):void} cb
     * @public
     */
    DescribeCdnDomainLogs(req, cb) {
        let resp = new DescribeCdnDomainLogsResponse();
        this.request("DescribeCdnDomainLogs", req, resp, cb);
    }

    /**
     * DescribePushTasks  用于查询预热任务提交历史记录及执行进度。
接口灰度中，暂未全量开放，敬请期待。
     * @param {DescribePushTasksRequest} req
     * @param {function(string, DescribePushTasksResponse):void} cb
     * @public
     */
    DescribePushTasks(req, cb) {
        let resp = new DescribePushTasksResponse();
        this.request("DescribePushTasks", req, resp, cb);
    }

    /**
     * PushUrlsCache 用于将指定 URL 资源列表加载至 CDN 节点，支持指定加速区域预热。
默认情况下境内、境外每日预热 URL 限额为各 1000 条，每次最多可提交 20 条。
接口灰度中，暂未全量开放，敬请期待。
     * @param {PushUrlsCacheRequest} req
     * @param {function(string, PushUrlsCacheResponse):void} cb
     * @public
     */
    PushUrlsCache(req, cb) {
        let resp = new PushUrlsCacheResponse();
        this.request("PushUrlsCache", req, resp, cb);
    }

    /**
     * GetDisableRecords 用于查询资源禁用历史，及 URL 当前状态。（接口尚在内测中，暂未全量开放使用）
     * @param {GetDisableRecordsRequest} req
     * @param {function(string, GetDisableRecordsResponse):void} cb
     * @public
     */
    GetDisableRecords(req, cb) {
        let resp = new GetDisableRecordsResponse();
        this.request("GetDisableRecords", req, resp, cb);
    }

    /**
     * DescribeBillingData 用于查询实际计费数据明细。
     * @param {DescribeBillingDataRequest} req
     * @param {function(string, DescribeBillingDataResponse):void} cb
     * @public
     */
    DescribeBillingData(req, cb) {
        let resp = new DescribeBillingDataResponse();
        this.request("DescribeBillingData", req, resp, cb);
    }

    /**
     * 本接口(UpdatePayType)用于修改账号计费类型，暂不支持月结用户或子账号修改。
     * @param {UpdatePayTypeRequest} req
     * @param {function(string, UpdatePayTypeResponse):void} cb
     * @public
     */
    UpdatePayType(req, cb) {
        let resp = new UpdatePayTypeResponse();
        this.request("UpdatePayType", req, resp, cb);
    }

    /**
     * EnableCaches 用于解禁手工封禁的 URL，解禁成功后，全网生效时间约 5~10 分钟。（接口尚在内测中，暂未全量开放使用）
     * @param {EnableCachesRequest} req
     * @param {function(string, EnableCachesResponse):void} cb
     * @public
     */
    EnableCaches(req, cb) {
        let resp = new EnableCachesResponse();
        this.request("EnableCaches", req, resp, cb);
    }


}
module.exports = CdnClient;
