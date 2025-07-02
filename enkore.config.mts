import {defineConfig} from "@anio-software/enkore"
import {defineTargetOptions} from "@anio-software/enkore.target-jsx-web"

export const config: unknown = defineConfig({
	target: {
		name: "jsx-web",
		options: defineTargetOptions({
			registry: {
				"anioSoftware": {
					url: "https://npm-registry.anio.software",
					authTokenFilePath: "secrets/anio_npm_auth_token",
					clientPrivateKeyFilePath: "secrets/npm_client.pkey",
					clientCertificateFilePath: "secrets/npm_client.cert"
				}
			},

			packageSourceRegistryByScope: {
				"@anio-software": {
					registry: "anioSoftware"
				},
				"@exory-playground": {
					registry: "anioSoftware"
				}
			},

			publish: [{
				registry: "anioSoftware"
			}]
		})
	}
})
