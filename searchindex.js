Search.setIndex({docnames:["api","artery","atrium","cluster","features","index","installation","issues","postprocess","preprocess","quantities","simulation","tutorials"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":5,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.intersphinx":1,"sphinx.ext.viewcode":1,"sphinxcontrib.bibtex":9,sphinx:56},filenames:["api.rst","artery.md","atrium.md","cluster.md","features.md","index.md","installation.md","issues.md","postprocess.md","preprocess.md","quantities.md","simulation.md","tutorials.md"],objects:{"vampy.automatedPostProcessing":[[0,0,0,"-","compute_flow_and_simulation_metrics"],[0,0,0,"-","compute_hemodynamic_indices"],[0,0,0,"-","compute_velocity_and_pressure"],[0,0,0,"-","postprocessing_common"],[0,0,0,"-","visualize_probes"]],"vampy.automatedPostProcessing.compute_flow_and_simulation_metrics":[[0,1,1,"","compute_flow_and_simulation_metrics"],[0,1,1,"","compute_u_avg"],[0,1,1,"","define_functions_and_iterate_dataset"],[0,1,1,"","main_metrics"],[0,1,1,"","rate_of_dissipation"],[0,1,1,"","rate_of_strain"]],"vampy.automatedPostProcessing.compute_hemodynamic_indices":[[0,1,1,"","compute_hemodynamic_indices"],[0,1,1,"","main_hemo"]],"vampy.automatedPostProcessing.compute_velocity_and_pressure":[[0,1,1,"","compute_velocity_and_pressure"],[0,1,1,"","main_convert"]],"vampy.automatedPostProcessing.postprocessing_common":[[0,2,1,"","STRESS"],[0,1,1,"","epsilon"],[0,1,1,"","get_dataset_names"],[0,1,1,"","read_command_line"]],"vampy.automatedPostProcessing.postprocessing_common.STRESS":[[0,3,1,"","norm_l2"]],"vampy.automatedPostProcessing.visualize_probes":[[0,1,1,"","main_probe"],[0,1,1,"","visualize_probes"]],"vampy.automatedPreProcessing":[[0,0,0,"-","DisplayData"],[0,0,0,"-","ImportData"],[0,0,0,"-","NetworkBoundaryConditions"],[0,0,0,"-","ToolRepairSTL"],[0,0,0,"-","automatedPreProcessing"],[0,0,0,"-","preprocessing_common"],[0,0,0,"-","simulate"],[0,0,0,"-","visualize"],[0,0,0,"-","vmtkpointselector"]],"vampy.automatedPreProcessing.DisplayData":[[0,2,1,"","DisplayModel"],[0,2,1,"","VtkPointCloud"],[0,2,1,"","VtkText"]],"vampy.automatedPreProcessing.DisplayData.DisplayModel":[[0,3,1,"","DisplayProbesAndModel"],[0,3,1,"","polyDataToActor"],[0,3,1,"","renderWindow"],[0,3,1,"","setLight"]],"vampy.automatedPreProcessing.DisplayData.VtkPointCloud":[[0,3,1,"","addPoint"],[0,3,1,"","clearPoints"]],"vampy.automatedPreProcessing.ImportData":[[0,1,1,"","ComputeBranchLength"],[0,1,1,"","ComputeBranchRadius"],[0,1,1,"","ComputeConnectivity"],[0,1,1,"","ComputeGeometricTolerance"],[0,1,1,"","ComputeGroupLength"],[0,1,1,"","ComputeGroupRadius"],[0,1,1,"","ComputeInletAverageCrossSectionArea"],[0,1,1,"","ComputeInletAverageRadius"],[0,2,1,"","Element"],[0,1,1,"","GetBlankedGroupsIdList"],[0,1,1,"","GetIndexCenterlineForADefinedLength"],[0,1,1,"","GetListProbePoints"],[0,1,1,"","GetListsUniqueBlankedBranches"],[0,1,1,"","GetMaxGroupId"],[0,1,1,"","GetRedundantBlankedIdList"],[0,1,1,"","IsArrayDefined"],[0,2,1,"","Network"],[0,1,1,"","SetNetworkStructure"],[0,1,1,"","SetRadiusX0"],[0,1,1,"","loadFile"]],"vampy.automatedPreProcessing.ImportData.Element":[[0,3,1,"","GetAlpha"],[0,3,1,"","GetBehindSegment"],[0,3,1,"","GetBeta"],[0,3,1,"","GetFrontSegment"],[0,3,1,"","GetId"],[0,3,1,"","GetInPointsx0"],[0,3,1,"","GetInPointsx0Id"],[0,3,1,"","GetInletRadius"],[0,3,1,"","GetLength"],[0,3,1,"","GetMeanArea"],[0,3,1,"","GetMeanRadius"],[0,3,1,"","GetOutPointsx1"],[0,3,1,"","GetOutPointsx1Id"],[0,3,1,"","GetVtkCellIdList"],[0,3,1,"","GetVtkGroupIdList"],[0,3,1,"","IsAnInlet"],[0,3,1,"","IsAnOutlet"],[0,3,1,"","IsBlanked"],[0,3,1,"","SetAlpha"],[0,3,1,"","SetBehindSegment"],[0,3,1,"","SetBeta"],[0,3,1,"","SetBlanking"],[0,3,1,"","SetFrontSegment"],[0,3,1,"","SetGamma"],[0,3,1,"","SetIfInlet"],[0,3,1,"","SetIfOutlet"],[0,3,1,"","SetInOutPointsCoordinates"],[0,3,1,"","SetInOutPointsIds"],[0,3,1,"","SetInletRadius"],[0,3,1,"","SetLength"],[0,3,1,"","SetMeanRadius"],[0,3,1,"","SetOutletRadius"],[0,3,1,"","SetVtkCellIdList"],[0,3,1,"","SetVtkGroupIdList"]],"vampy.automatedPreProcessing.ImportData.Network":[[0,3,1,"","AddElement"],[0,3,1,"","GetNetworkInletRadius"],[0,3,1,"","GetNumberOfBifBranches"],[0,3,1,"","GetNumberOfElements"],[0,3,1,"","GetNumberOfInlet"],[0,3,1,"","GetNumberOfOutlet"],[0,3,1,"","SetNetworkInletRadius"]],"vampy.automatedPreProcessing.NetworkBoundaryConditions":[[0,2,1,"","FlowSplitting"]],"vampy.automatedPreProcessing.NetworkBoundaryConditions.FlowSplitting":[[0,3,1,"","CheckTotalFlowRate"],[0,3,1,"","ComputeAlphas"],[0,3,1,"","ComputeBetas"],[0,3,1,"","ComputeGammas"]],"vampy.automatedPreProcessing.ToolRepairSTL":[[0,1,1,"","DumpQualityStats"],[0,1,1,"","checkIfThereIsHoles"],[0,1,1,"","checkIfThereIsNonTriangleCells"],[0,1,1,"","cleanTheSurface"],[0,1,1,"","cleanTheSurfaceUnstructGrid"],[0,1,1,"","closeAllTheHolesOnTheSurface"],[0,1,1,"","computeQualityMesh"],[0,1,1,"","foundAndDeleteNaNTriangles"],[0,1,1,"","isNaN"],[0,1,1,"","repairSTL"],[0,1,1,"","surfaceOverview"],[0,1,1,"","writeSTLfile"]],"vampy.automatedPreProcessing.automatedPreProcessing":[[0,1,1,"","main_meshing"],[0,1,1,"","read_command_line"],[0,1,1,"","run_pre_processing"]],"vampy.automatedPreProcessing.preprocessing_common":[[0,1,1,"","add_flow_extension"],[0,1,1,"","compute_centers_for_meshing"],[0,1,1,"","compute_distance_to_sphere"],[0,1,1,"","compute_flow_rate"],[0,1,1,"","dist_sphere_constant"],[0,1,1,"","dist_sphere_curvature"],[0,1,1,"","dist_sphere_diam"],[0,1,1,"","find_boundaries"],[0,1,1,"","generate_mesh"],[0,1,1,"","get_centers_for_meshing"],[0,1,1,"","get_regions_to_refine"],[0,1,1,"","make_voronoi_diagram"],[0,1,1,"","mesh_alternative"],[0,1,1,"","provide_region_points"],[0,1,1,"","setup_model_network"],[0,1,1,"","write_mesh"]],"vampy.automatedPreProcessing.simulate":[[0,1,1,"","exists"],[0,1,1,"","run_simulation"]],"vampy.automatedPreProcessing.visualize":[[0,1,1,"","visualize"]],"vampy.automatedPreProcessing.vmtkpointselector":[[0,2,1,"","VtkText"],[0,2,1,"","vmtkPickPointSeedSelector"],[0,2,1,"","vmtkSeedSelector"]],"vampy.automatedPreProcessing.vmtkpointselector.vmtkPickPointSeedSelector":[[0,3,1,"","Execute"],[0,3,1,"","InitializeSeeds"],[0,3,1,"","PickCallback"],[0,3,1,"","UndoCallback"]],"vampy.automatedPreProcessing.vmtkpointselector.vmtkSeedSelector":[[0,3,1,"","Execute"],[0,3,1,"","GetSurface"],[0,3,1,"","GetTargetSeedIds"],[0,3,1,"","SetSurface"]],"vampy.simulation":[[0,0,0,"-","Artery"],[0,0,0,"-","Atrium"],[0,0,0,"-","Womersley"],[0,0,0,"-","simulation_common"]],"vampy.simulation.Artery":[[0,1,1,"","beta"],[0,1,1,"","create_bcs"],[0,1,1,"","mesh"],[0,1,1,"","pre_solve_hook"],[0,1,1,"","problem_parameters"],[0,1,1,"","temporal_hook"],[0,1,1,"","theend_hook"],[0,1,1,"","update_pressure_condition"]],"vampy.simulation.Atrium":[[0,1,1,"","create_bcs"],[0,1,1,"","mesh"],[0,1,1,"","pre_solve_hook"],[0,1,1,"","problem_parameters"],[0,1,1,"","temporal_hook"],[0,1,1,"","theend_hook"]],"vampy.simulation.Womersley":[[0,2,1,"","WomersleyComponent"],[0,1,1,"","compute_area"],[0,1,1,"","compute_boundary_geometry_acrn"],[0,1,1,"","compute_radius"],[0,1,1,"","fourier_coefficients"],[0,1,1,"","make_womersley_bcs"],[0,1,1,"","x_to_r2"]],"vampy.simulation.Womersley.WomersleyComponent":[[0,3,1,"","eval"],[0,3,1,"","set_t"]],"vampy.simulation.simulation_common":[[0,1,1,"","get_file_paths"],[0,1,1,"","print_mesh_information"],[0,1,1,"","store_u_mean"]]},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","method","Python method"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:method"},terms:{"0":[0,1,2,8,11],"000":[1,11],"0035":11,"01":0,"0951":[1,11],"1":[0,1,2,3,8,9,10,11],"10":[1,7,11],"100":[0,8,11],"1000":[0,2,8],"100000":0,"1000000":0,"1001":0,"1060":11,"11":1,"12":1,"124":0,"13":1,"14":2,"15":2,"16":2,"17":2,"1m":2,"2":[0,1,8,10,11],"20":[0,11],"200":8,"2002":0,"2004":0,"2010":0,"2016":0,"2021":[2,8],"20m":1,"21":[2,8],"23":0,"233":[2,8],"250":[2,8],"264":7,"28":2,"29":2,"291":0,"3":[0,1,2,3,8,9,10,11],"3018":11,"3018e":11,"31":0,"4":[0,8,10],"49":[2,8],"5":[0,2,8,11],"500":11,"512m":6,"6":[0,8,11],"617":0,"619":0,"66":2,"7":[0,2,8],"704":0,"713":0,"8":[1,2],"9":1,"951":[0,1,2,8,11],"case":[0,1,2,8,9],"class":0,"default":[0,1,8,11],"do":[0,1,4],"final":[0,6,8],"float":[0,11],"function":[0,4,9],"int":0,"new":[0,4],"public":[1,2],"return":0,"short":[1,2,3],"true":[0,2,11],"try":0,A:[0,1,2,6,8],As:[0,1,3,7],By:[2,8],For:[0,1,2,3,5,8,12],If:[0,2,3,6,8],In:[0,1,2,8,9,10],It:[0,1,12],One:0,That:0,The:[0,1,2,3,4,6,8,9,10,11,12],Then:[3,6],There:5,These:12,To:[1,2,6,7,8,11],_cycle_:8,_i:10,_j:10,_x:10,_y:10,_z:10,abbrevi:10,about:0,abov:[1,2],absolut:[0,10],accord:0,activ:[0,6,10],actor:0,actual:0,ad:[1,11],adapt:3,add:[0,1],add_flow_extens:0,addel:0,addit:[0,2,8],addpoint:0,adjust:[0,8],adult:0,advanc:5,advis:0,after:[0,1,7,11],again:2,ajrn:0,al:[0,2,8],algorithm:0,all:[0,1,3,6,8],along:[0,1,11],alongsid:9,alpha:0,alpha_i:0,alreadi:7,also:[1,2,3,5,8,9,12],altern:[0,1,2,7,8],although:9,am:0,an:[0,1,5,6,7,8,9,11,12],analyz:5,aneurisk:[1,8],aneurysm:[0,1,2,12],ani:[1,4,6,11],annal:[2,8],anoth:[0,8],anthoni:0,antiga:0,anywai:0,appendag:8,appli:[0,1,7],applic:2,appreci:4,approach:[1,12],approxim:1,ar:[0,1,2,3,5,6,8,9,10,11,12],arbitrari:0,area:[0,2,11],area_inlet:[0,11],area_j:0,area_ratio:[0,11],arg:0,argument:[0,8,9,11],arrai:0,arraynam:0,arteri:[0,2,3,5,8,9,11,12],artery_info:9,artery_job:3,artery_prob:9,ascii:0,ask:2,assum:[0,3,11,12],atla:[2,8],atrial:[0,2,8],atrium:[0,5,8,9,12],attribut:0,author:11,autom:[2,3,5],automat:0,automatedpostprocess:[0,3],automatedpreprocess:[0,3,9],averag:[0,1,2,10],average_over_cycl:0,avoid:[0,7],awai:0,bar:10,base:[0,5,11],basic:12,batch:3,becaus:[1,2],becom:[1,2],been:[0,3,7,8,11],befor:[0,2,6,12],begin:0,being:[0,2],bendika:[2,8],benefici:[1,12],beta:0,between:[0,1,8],bifurc:0,biomech:0,biomed:[0,2,8],bl:[1,2],blank:0,blankedgroupsidlist:0,blood:2,blue:8,bodi:12,bool:0,bottom:8,boundari:[0,1,2,5,11],boundarynorm:0,branch:0,branchgroupid:0,branchid:0,brief:9,bug:[0,4],build:6,built:6,c0001:1,c0097:8,c:[0,1,3,9],calcul:0,call:6,can:[0,1,2,6,7,8,9,11],cap:0,capit:3,captur:2,cardiac:[0,1,2,8,11],cardiac_cycl:[0,11],carolin:[2,8],carotid:[0,5,9,12],case_nam:0,case_path:0,case_test_arteri:[3,9,11],cd:6,cdot:10,cell:[0,1,2,10],celldiamet:10,center:0,center_spher:0,centerlin:[0,11],certain:[0,7],cesar:[2,8],cfd:[3,5,8,9,11,12],cfl:10,chamber:2,chang:[6,7,11],channel:7,channel_prior:7,character:0,characterist:[0,8,10],cheat:0,check:0,checkhol:0,checkifthereishol:0,checkifthereisnontrianglecel:0,checkpoint:11,checkqual:0,checktotalflowr:0,chnafa:0,choic:0,chose:1,chosen:[0,11],circul:2,cleanthesurfac:0,cleanthesurfaceunstructgrid:0,clearpoint:0,clinic:11,clip:2,clone:[3,6],closealltheholesonthesurfac:0,closehol:0,closest:2,clot:2,cluster:5,coars:[0,1],coarsen:[0,1,9],coarsening_factor:0,coarseningfactor:1,coarser:[1,11],code:0,coeffici:0,coeffstyp:0,collect:[2,5],color:1,com:6,command:[0,1,2,3,6,7,8,9,10,11],commandlin:0,commandline_kwarg:[0,11],compactli:[2,11],compar:0,comparison:8,complet:[0,9],complex:[0,1],compon:0,compress:[0,7,8,9],compress_mesh:0,comput:[0,1,2,5,8,9,12],compute_area:0,compute_boundary_geometry_acrn:0,compute_centers_for_mesh:0,compute_distance_to_spher:0,compute_flow_and_simulation_metr:[0,8,10],compute_flow_r:0,compute_hemodynamic_indic:[0,8,10],compute_radiu:0,compute_u_avg:0,compute_velocity_and_pressur:[0,8],computealpha:0,computebeta:0,computebranchlength:0,computebranchradiu:0,computeconnect:0,computegamma:0,computegeometrictoler:0,computegrouplength:0,computegroupradiu:0,computeinletaveragecrosssectionarea:0,computeinletaverageradiu:0,computequalitymesh:0,concern:0,conclud:1,conda:[7,8],condit:[0,5,10],conduit:0,config:[3,7],config_path:0,configur:[0,3,7],conflict:7,connect:0,consequ:1,consid:[0,1,2,11,12],consist:[0,1,2],constant:[0,2],construct:[2,8],contain:[0,3,6],control:[1,8],convert:[0,2,7,8],coordin:[0,2],copi:3,corrado:[2,8],correspond:[0,1,2,8,11],courant:10,cppimport:6,creat:[0,2,4,8,11],create_bc:0,create_flow_extens:0,criterion:[0,1,2],cross:0,current:[3,8],curvatur:0,cycl:[0,1,2,11],cycles_to_averag:0,d:[0,10],d_mitral:0,data:[0,2,8],data_fil:0,databas:8,dataset:[0,1,2],dataset_avg:0,dataset_nam:0,datum:0,daughter:0,david:0,decomposit:0,defin:[0,1,2,3,5,10,12],define_functions_and_iterate_dataset:0,definit:10,degre:[0,4],delta:[0,1,2,10],demonstr:[2,8,11,12],denser:1,densiti:[0,1],depenceni:7,depend:[3,6,8],describ:[1,6],desir:[0,8],desiredlength:0,determin:[0,1,2,8],dg:0,diagram:0,diamet:[0,3],diastol:2,dict:[0,11],dictionari:0,differ:[0,1,2,8,10,12],dir_path:0,direct:0,directli:6,directori:[0,3,6],displai:[0,1,2,6,8],displaydata:0,displaymodel:0,displayprobesandmodel:0,displaystyl:10,dissip:[0,10],dist_sphere_const:0,dist_sphere_curvatur:0,dist_sphere_diam:0,distal:0,distanc:0,distance_offset:0,distance_scal:0,distribut:0,divid:12,divis:0,dockerfil:6,doe:1,dolfin:[0,9],domain:2,done:[2,6,11],download:1,dt:[0,2,8,10,11],dual:0,due:0,dump:[0,11],dump_probe_frequ:[0,11],dumpqualitystat:0,durat:11,dure:[0,2,7,8],dynam:[5,8,9,12],e:[0,6,10],e_k:10,each:[0,8],earil:2,earlier:2,easili:8,ecap:[0,10],edg:[0,8,10],edge_length:0,edit:3,edward:[2,8],effect:0,either:[0,8],el:[1,2],element:[0,11],ell:10,elliot:[2,8],ellipt:0,end:[0,8,11],endocardium:2,endotheli:[0,10],energi:[8,10],eng:0,engin:[0,2,8],enhanc:4,ensur:2,env:[6,7],environ:6,epsilon:0,equal:1,err:0,error:[0,7],et:[0,2,8],eta:10,eval:0,eval_dict:0,eventu:2,exactli:0,exampl:[1,3,9],execut:[0,2,8,11],exist:0,experi:[4,7,11],explain:1,express:0,extend:0,extens:[0,2],extension_length:0,extension_mod:0,extract:[0,2],extrem:0,f:6,facet_domain:0,fact:1,factor:[0,9],fals:[0,1,2,3,11],familiar:12,farhad:[2,8],featur:[5,8],fenic:3,few:0,fibr:[2,8],field:[0,1,2,3,8,11],fig:[1,2,8,9],figur:[0,2],file:[0,2,3,5,6,7,8,9],file_name_probe_point:0,file_name_surface_nam:0,file_name_vtu_mesh:0,file_name_xml_mesh:0,file_path:0,file_path_u:0,file_path_u_avg:0,file_u:0,filenam:0,filename_model:0,filenamecenterlin:0,fill:0,filter:2,find:0,find_boundari:0,fine:1,finer:1,finit:[0,11],first:[0,1,8,9,12],five:[8,11],fix:7,flag:[1,2,3,6,8],flatt:0,flatten:0,flexibl:7,fli:2,flo:2,flow:[0,2,5,9,11],flow_metr:0,flow_rat:3,flowmetr:8,flowsplit:0,fluid:[0,5,8,9,10,12],focus:2,folder:[0,2,3,8,9,11],follow:[0,1,2,3,6,7,8,10,11,12],forc:1,form:0,formal:0,format:[0,2,7,8,11],foundanddeletenantriangl:0,four:[2,8],fourier:0,fourier_coeffici:0,frac:10,framework:3,freedom:4,frequenc:[0,8,11],frequent:[11,12],friction:10,friedrich:10,from:[0,1,2,6,8],full:8,fulli:2,g:0,gamma:0,gamma_i:0,gener:[0,1,2,5,9,10],generate_mesh:0,geometr:5,geometri:[1,2,8,11,12],get:[0,1,11],get_centers_for_mesh:0,get_dataset_nam:0,get_file_path:0,get_regions_to_refin:0,getalpha:0,getbehindseg:0,getbeta:0,getblankedgroupsidlist:0,getfrontseg:0,getid:0,getindexcenterlineforadefinedlength:0,getinletradiu:0,getinpointsx0:0,getinpointsx0id:0,getlength:0,getlistprobepoint:0,getlistsuniqueblankedbranch:0,getmaxgroupid:0,getmeanarea:0,getmeanradiu:0,getnetworkinletradiu:0,getnumberofbifbranch:0,getnumberofel:0,getnumberofinlet:0,getnumberofoutlet:0,getoutpointsx1:0,getoutpointsx1id:0,getredundantblankedidlist:0,getsurfac:0,gettargetseedid:0,getvtkcellidlist:0,getvtkgroupidlist:0,gin:0,git:6,github:6,given:0,go:0,gradient:[0,8,10],group:0,gui:6,guid:12,guitext:0,gz:[0,2,7,9,11],h5:[0,8],h:[0,2,8,10],ha:[0,3,7,8,11],harbour:[1,2],have:[1,2,3,5,8,11,12],hdf5:[2,11],hdf5file:0,hemo:[8,10],hemodynam:[0,1,5,11],henc:[0,2],here:[1,2,3,8,9],hesit:4,high:5,highli:4,highlight:3,hoi:0,home:3,host:6,hostnam:3,how:0,howev:[0,1,4,11],hpc:5,http:6,human:[2,8],hydraul:0,i:[0,1,2,3,9],ica:[0,12],ica_valu:3,id:[0,3,11],id_in:[0,11],id_out:[0,11],ieee:0,ij:10,illustr:8,imag:[0,6],implement:[8,10],importdata:0,includ:[0,2,3,5],include_outlet:0,increas:0,ind:0,index:[0,1,2,8,10],indic:[1,2],inflow:0,info:[0,9],inform:3,initi:1,initializese:0,inlet:[0,2,11],inlet_cent:0,inlet_flow_extension_length:0,inner:2,input:[0,1,2,9],input_path:0,inputfilenam:0,inscrib:[0,1],insert:5,insid:[1,2,6,9,11],inspect:0,instal:[7,8,11,12],instanten:8,instead:2,int_0:10,interact:0,interest:2,intern:[0,5,9,12],interv:[0,10],intracrani:2,introduct:9,intuit:1,investig:[1,12],iq:0,is_atrium:0,isaninlet:0,isanoutlet:0,isarraydefin:0,isblank:0,isconnectivityneed:0,isnan:0,isradiusinletneed:0,issu:5,its:[0,1,6],itself:1,j:[0,2,8],job:[0,3],job_script:3,journal:0,json:[0,3,9],just:0,k:10,ke:[8,10],kei:3,kg:[0,11],kinemat:[0,10,11],kinet:[8,10],known:[2,5],kolmogorov:10,krylov_solv:11,kvslab:6,l:0,la_5_endo:2,la_endo:2,la_endo_5:2,label:2,langl:10,larg:[1,2],larger:1,largest:0,last:8,latter:1,layer:[1,2],lead:2,left:[0,1,5,8,9,10,12],leftmost:8,length:[0,2,8,10],less:11,level:0,lewi:10,lib:7,like:2,lil:0,line:[0,7,9,11],linear:11,list:[0,8,10],listprobepoint:0,load:0,loadfil:0,local:[6,12],local_dir:0,localdatadir:3,locat:[0,1,2,3,7,9,11],lower:0,m:[0,1,2,3,6,10,11],machin:6,magnitud:0,mai:[2,4,7,8,9],main:12,main_convert:0,main_hemo:0,main_mesh:0,main_metr:0,main_prob:0,make:[2,6],make_voronoi_diagram:0,make_womersley_bc:0,mani:[1,4],manual:[2,7],map:0,mapper:0,match:0,mathcal:10,matplotlib:8,max:0,max_dist:0,maxim:1,maximum:[0,1],maxnumpoint:0,mcveigh:[2,8],mean:[0,1,6,10,12],mean_inflow_r:0,meant:[1,2,12],measur:0,mechan:10,medic:0,merg:0,mesh:[0,3,5,7,10,11,12],mesh_altern:0,mesh_path:[0,2,11],meshing_method:0,messag:0,method:[0,1,4,7],metric:5,middl:8,midpoint:0,might:0,mikaem:6,millimet:1,millisecond:8,min:0,min_dist:0,miniconda3:7,minimum:0,misr:0,misr_max:0,mitral:[0,2],mm:[0,1,11],mode:[0,6],model:[0,1,2,6,8,9,11,12],model_path:0,modif:0,modifi:0,modul:3,monitor_converg:11,more:[0,1,5],morphman:[7,12],morpholog:[1,2,5],most:2,mous:2,ms:[0,1,2,11],mu:10,multipl:0,multipli:0,n:[0,1,10],n_cycl:0,name:[0,6,7,8,9,11],name_of_imag:6,natalia:[2,8],navig:[2,7],ndarrai:0,necessari:12,need:[2,3,4,6,7],network:[0,6],network_el:0,networkboundarycondit:0,newfold:0,next:[6,11],nieder:[2,8],nomin:0,non:0,none:0,norm:0,norm_l2:0,normal:[0,11],normal_compon:0,note:[0,1,2,8],notifi:2,now:[2,6],ns_express:0,ns_namespac:0,ns_paramet:[0,11],nu:[0,10,11],num:0,num_fil:0,num_fourier_coeffici:0,number:[0,2,8],number_of_cycl:11,numer:0,oasi:[2,3,5,12],obj:0,object:[0,1],off:[0,2],offset:0,older:0,one:[0,1,2],onli:[0,2],onto:0,onward:8,opac:0,open:[0,7,8],option:1,order:11,origin:6,os:0,oscillatori:[0,1,2,8,10],osi:[0,1,2,8,10],other:[0,2,3,4,8,9],otherwis:0,our:3,out:[0,2],outflow:0,outlet:[0,2,11],outlet_cent:0,outlet_flow_extension_length:0,output:[0,3,8],output_surfac:0,outputbispolydata:0,outputfilenam:[0,7],outputpolydata:0,over:[0,8],overview:11,p:0,p_:0,pa:[0,10,11],packag:[6,7],panel:8,paper:0,param:0,paramet:[0,5],paramiko:0,paraview:[0,2,8,12],parent:1,pars:0,part:[0,1,3],partial:10,particular:[1,2],particularli:8,pascal:0,pashakhanloo:[2,8],pass:9,password:3,path:[0,3,9,11],peak:8,per:[1,2,8,11],percentag:0,perfectli:0,perform:[1,2,3,8,9,11,12],period:0,physiolog:[0,5],pickcallback:0,pip:[6,8],pipelin:[2,3],place:[0,2],plane:0,pleas:4,point:[0,2,3,9],polydata:0,polydatatoactor:0,polynomi:11,pop:[0,2,9],posit:0,possibl:[0,3],post:[3,5,9,10,12],postprocdatadir:3,postprocess:8,postprocessing_common:0,potenti:[0,10],pouch:2,power:0,practic:1,pre:[1,3,5,7,11,12],pre_solve_hook:0,prefer:11,prepar:[0,5,9],preprocess:3,preprocessing_common:0,prescrib:0,present:[1,2,3,9,10],press:2,pressur:[0,1,2,5,9,11],pressure_degre:[0,11],previou:2,print:[0,11],print_info:0,print_intermediate_info:11,print_mesh_inform:0,prioriti:7,probe:[0,3,5,9,11],probe_point:0,probe_saving_frequ:0,problem:[0,2,3,5,11,12],problem_fil:3,problem_paramet:0,problemat:0,proce:2,procedur:3,process:[1,3,5,7,10,11,12],produc:[8,9],profil:0,project:[0,3,6],prone:2,prope:9,propos:4,provid:[0,2,4],provide_region_point:0,provided_point:0,proxim:0,publish:2,pull:4,pulmonari:[0,2],pulsatil:0,pump:2,pv:0,pwd:6,py:[0,2,3,7,8,10,11],pypelin:[6,8,9,11],python3:[6,7],python:11,q:[0,1,2],quadrat:11,qualit:8,quantiti:[0,5],quantitit:8,quicli:2,r:[0,2,7,8],radiu:0,radius_spher:0,ramp:0,rangl:10,rate:[0,9,10],rate_of_dissip:0,rate_of_strain:0,ratio:[0,11],rb:7,rbp:[2,8],reach:0,read:0,read_command_lin:0,readili:9,real:2,reason:8,recommend:[1,6],red:8,redund:0,redundantblankedbranchesidlist:0,ref:0,refer:5,refin:[0,1,12],refine_region:0,reflect:6,regard:7,region:[0,1,2,12],region_cent:0,region_point:0,rel:[0,1,2,8,10],relev:[0,8],reli:2,remain:8,rememb:6,remesh:0,remeshed_surfac:0,remeshedsurfac:0,remot:[0,3],remotedatadir:3,remov:[6,7],render:[0,1,2,9],renderwindow:0,repairstl:0,report:[4,11],repositori:6,repres:[0,2,8],request:4,requir:1,resid:[0,1,2,8,10],resist:0,resolut:5,resolv:7,respect:[0,2,8,9],rest:2,restart_fold:0,result:[0,1,2,3,8,11,12],results_arteri:[8,11],results_atrium:[2,8],rho:[0,10],right:[1,2,8,10],rightmost:8,rigor:1,rm:6,robust:0,roka:[2,8],ron:0,ronei:[2,8],root:[0,6],routin:0,rp:2,rrt:[0,1,2,8,10],run:[0,1,2,5,8,9,11],run_numb:8,run_pre_process:0,run_simul:0,s:[0,1,2,8,9,10,11],s_:10,s_i:0,saga:3,same:0,sampl:[0,5,8,9,11],save:[0,2,8,9,11],save_figur:0,save_frequ:0,save_path:0,save_solution_after_cycl:[0,2,11],save_solution_at_tstep:0,save_solution_frequ:[0,11],saved_time_steps_per_cycl:0,sc:3,scalar:8,scalar_compon:0,scale:[0,10],scale_to:0,schmidt:0,scp:0,script:[3,5,6,7,8,9,10],search:0,second:[0,2,8],section:[0,2,6],see:0,seed:2,seem:0,segment:0,select:[0,2],self:7,semi:2,server:0,set:[0,3,6,7,8],set_t:0,setalpha:0,setbehindseg:0,setbeta:0,setblank:0,setfrontseg:0,setgamma:0,setifinlet:0,setifoutlet:0,setinletradiu:0,setinoutpointscoordin:0,setinoutpointsid:0,setlength:0,setlight:0,setmeanradiu:0,setnetworkinletradiu:0,setnetworkstructur:0,setoutletradiu:0,setradiusx0:0,setsurfac:0,setup_model_network:0,setvtkcellidlist:0,setvtkgroupidlist:0,sever:[0,8],sftp:0,sh:3,shape:[0,9],share:6,shear:[0,1,2,5,8,10],shm:6,should:[0,1,2,3,6],show:[0,8,9,11],show_figur:0,shown:[1,2,8,9],side:2,simdatadir:3,similar:2,similarli:[4,8],simpli:[0,11],simplic:1,simul:[5,9,12],simulation_common:0,sinc:0,singl:3,siphon:1,site:[2,7],size:[0,1,6,11],skip:8,slice:8,slightli:2,small:[1,2],smaller:1,smooth:0,smoothing_factor:0,smoothing_method:0,snippet:11,softwar:[8,9,12],solut:[0,8,11],solv:2,solver:11,some:7,someth:[0,1],sometim:0,sourc:[0,6,8],space:[0,2],specif:[0,3,4,8,11],specifi:[0,2,8],sphere:[0,1],spline:0,split:[0,9],sqrt:10,src:[3,8,11],ssh:0,ssh_config:3,standard:0,star:10,start:[0,1,3,6,8,11],start_cycl:0,statist:11,steinman:0,step:[0,1,2,8,9,10,11,12],steven:[2,8],stick:2,stl:2,stop:0,storag:8,store:[0,3,8,11],store_u_mean:0,str:0,straatman:0,strain:[0,10],stress:[0,1,2,5,8,10],structur:[0,1,2],subdivid:0,submit:3,subset:8,success:3,suffici:2,suitabl:0,sum:0,sum_1:0,sumoutletarea:0,sumsurfac:0,supercomput:3,superior:0,suppli:[1,2,6,8],supplier:0,surfac:[0,2],surface_extend:0,surfaceoverview:0,symbol:10,system:[0,6],systol:[2,8],t:[0,1,2,6,8,10,11],tabl:10,take:0,target:0,tau:10,tau_:10,tawss:[0,1,2,8,10],templat:3,tempor:[0,8,10],temporal_hook:0,temporari:7,tensor:0,termin:9,test:[0,3,9,11],test_cap:0,tetrahedr:[1,2],text:10,textit:10,texttt:10,th:0,than:0,theend_hook:0,thei:0,them:[6,11],therefor:8,thi:[0,1,2,3,5,7,8,9],though:0,three:[1,2],through:[2,3,6,8,12],thu:[0,2,8],ti:6,time:[0,1,2,8,10,11],time_to_averag:0,times_to_averag:0,tini:1,titlewindow:0,tke:[8,10],tmp:6,todo:0,toggl:0,tol:0,toler:0,tool:4,toolrepairstl:0,top:8,total:[0,1,2],trace:8,tracker:4,transact:0,trayanova:[2,8],treat:0,tstep:0,tubular:[1,2,9],turbul:[5,8,10],turn:0,tutori:[1,2,3],two:[0,2,5,11,12],twssg:[0,8,10],type:0,typic:2,u:[0,2,10],u_:[0,10],u_avg:0,u_i:10,u_j:10,u_mean0:0,u_mean1:0,u_mean2:0,u_mean:0,u_x:10,u_z:10,underestim:0,underli:6,undo:2,undocallback:0,uniform:1,uniqu:0,unit:[0,10],unix:6,up:[0,2,3,9],updat:[6,7,11],update_pressure_condit:0,us:[0,1,2,3,7,9,11,12],use_flow_extens:0,use_krylov_solv:11,user:[0,2,3,7,8,10,12],userexpress:0,usernam:[3,7],v:[0,6],valid:0,valu:[0,1,3,8],valv:[0,2],vampi:[0,1,2,3,4,8,9,10,11,12],varepsilon:10,variabl:[0,1],varieti:5,vascular:[1,2,6,8,9,11,12],vector:0,vector_:0,vector_filenam:0,vein:[0,2],veloc:[0,1,2,5,9,10,11],velocity_degre:[0,11],veloctii:8,ventricl:2,verbos:0,verbose_print:0,verboseprint:0,veri:0,versa:1,version:[0,6,12],vessel:0,vice:1,vicin:1,view:[1,2,8],viewabl:8,vigmond:[2,8],viscos:[0,10,11],visual:[0,9,12],visualize_prob:[0,8],viz:0,vmtk:[0,7],vmtkpickpointseedselector:0,vmtkpointselector:0,vmtkseedselector:0,volumetr:[0,1,2,5,8,9],voronoi:0,vortic:[1,2],vtk:[0,2],vtkcellidlist:0,vtkgroupidlist:0,vtkpointcloud:0,vtkpolydata:[0,2],vtkpolydataconnectivityfilt:0,vtkpoyldata:0,vtktext:0,vtkunstructuredgrid:0,vtp:[1,2,3,9],vtu:[0,7,9],vtuunstructuredgrid:0,vv:0,vz:3,w:6,wa:[1,2,8],wall:[0,1,2,5,8,10],want:6,warn:0,waveform:0,we:[1,2,3,4,5,6,8,9,10,11,12],well:3,were:8,what:1,when:[0,6,7,8,9],where:[0,1,2,3,8,12],wherea:8,whether:0,which:[0,1,2,3,5,6,8,12],why:0,wierd:0,window:[0,2,9],within:[0,1,3,8],womerslei:0,womersleycompon:0,work:12,would:[1,2,8],wrap:0,write:0,write_mesh:0,writestlfil:0,wrong:0,wss:[0,10],x0:0,x0id:0,x11:6,x1:0,x1id:0,x:[0,2,10],x_i:10,x_j:10,x_to_r2:0,xdmf:[0,8],xhost:6,xml:[0,2,7,9,11],xxxxxxx:3,y:[0,2,10],yiemeng:0,yml:6,you:[4,6,7,8,12],your:[6,7,12],your_environ:[6,7],your_hostnam:3,your_password:3,your_usernam:3,z:[2,10],zip:0,zoom:[1,2]},titles:["API Reference","High-resolution CFD simulation in the internal carotid artery","Hemodynamics simulation on a left atrium","Running a simulation on an HPC cluster","Features and issues","The Vascular Modeling Pypeline","Installation","Known issues","Post-processing","Pre-processing","Computed quantities","Computational fluid dynamics","Tutorials"],titleterms:{The:5,adjust:11,an:[2,3],anaconda:7,api:[0,5],appendag:2,arteri:1,atrium:2,averag:8,base:1,boundari:9,carotid:1,centerlin:1,cfd:[0,1,2],cluster:3,compat:7,comput:[10,11],conda:6,condit:9,constant:1,content:5,curvatur:1,cycl:8,diamet:1,docker:6,dynam:11,edg:1,edit:6,featur:4,flow:[8,10],fluid:11,hemodynam:[2,8,10],high:1,hpc:3,ica:1,indic:[8,10],instal:[5,6],intern:1,issu:[4,7],known:7,left:2,length:1,link:12,mesh:[1,2,9],metric:[8,10],model:5,note:6,oasi:[6,11],paramet:11,phase:8,post:[0,8],pre:[0,9],pressur:8,probe:8,process:[0,8,9],pypelin:5,python:5,quantiti:[8,10],refer:0,refin:2,resolut:1,run:[3,6],script:0,simul:[0,1,2,3,8,10,11],surfac:1,tutori:[5,12],us:[5,6],vampi:[5,6],vascular:5,veloc:8,visual:8,vmtkmeshwrit:7}})