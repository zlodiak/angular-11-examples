import { OwnerService } from '../services/owner/owner.service';

export function appInitializer(ownerService: OwnerService) {
  return () => new Promise(resolve => {
    // ownerService.fillOwners();
    resolve("Resolving");
  });
}