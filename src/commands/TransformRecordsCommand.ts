import { ICommand } from "./ICommand";
import { ServiceManager, ServiceTypes } from "../common/ServiceManager";
import { FilesService } from "../services/FilesService";
import { FileParsingService } from "../services/FileParsingService";
import { ScrambleTableService } from "../services/ScrambleTableService";

export class TransformRecordsCommand implements ICommand {
	exec(service_man: ServiceManager): void 
	{
		const files_service = service_man.get_service(ServiceTypes.Files) as FilesService;
    const file_parsing_service = service_man.get_service(
      ServiceTypes.FileParsing
		) as FileParsingService;
		
		const scramble_table_service = service_man.get_service(
      ServiceTypes.ScrambleTable
		) as ScrambleTableService;
		
		files_service.files(file => {
			const records_cache = file_parsing_service.parse_records(file.buffer);
		});
	}
}