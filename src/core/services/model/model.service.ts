import { Injectable } from '@nestjs/common';
import { Model } from 'src/shared/abstracts/model';
import { v4 as uuidv4 } from 'uuid';


@Injectable()
export class ModelService {
    static generateId() {
        return uuidv4()
    }

    static load(model: Model) {
        model.id = ModelService.generateId()
        return model
    }

    generateId() {
        return uuidv4()
    }

    load(model: Model) {
        return ModelService.load(model)
    }


}
