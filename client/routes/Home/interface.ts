
export interface HomeProps {
	dispatch: Function;
	state: {
		search?: string;
		type?: string;
		apiCall?: boolean;
		data?: any
	}
};

export interface SearchResults {
    type: string;
    results: Array<object>;
    loading: boolean;
    apiCall: boolean;
};

export interface CardInterface {
    avatar_url: string;
    organizations_url: string; 
    html_url: string;
    login: string;
    name: string;
    description: string;
    forks:string;
    owner: any;
};

export interface SearchData {
    search: string;
    type: string;
};
export interface ApiData extends SearchData {
    data: Array<object>;
};
