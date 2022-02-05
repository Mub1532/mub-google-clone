import { Key, ReactChild, ReactFragment, ReactPortal } from "react";
import Pages from "./Pages";

function Results({ results }: any) {
    return <div className="flex flex-col text-xs md:text-sm lg:text-base dark:text-zinc-400 mx-auto p-2 px-4 md:pl-40">
        <div className="mb-4 text-zinc-500">Around {results.searchInformation?.formattedTotalResults} results. Took {results.searchInformation.formattedSearchTime} seconds Note: Results come from Googles API, I not responsible for the results</div>
        {results.items?.map((e: { link: string | undefined; formattedUrl: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; title: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; snippet: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }, i: Key | null | undefined) => {
            return (
                <div key={i} className="max-w-xl mb-4">
                    <a href={e.link}>
                        <div className="max-w-fit cursor-pointer group">
                            <div className="text-zinc-600 dark:text-zinc-500 text-xs">{e.formattedUrl}</div>
                            <div className="dark:text-blue-400 text-blue-600 group-hover:underline">{e.title}</div>
                        </div>
                    </a>
                    <div className="text-xs">{e.snippet}</div>
                </div>
            )
        })}
        <Pages />
    </div>;
}

export default Results;
