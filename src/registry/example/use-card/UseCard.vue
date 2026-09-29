<template>
    <Card class="w-full max-w-sm">
        <CardHeader>
            <CardTitle>Login to your account</CardTitle>
            <CardDescription>Enter your email below to login to your account</CardDescription>
            <CardAction>
                <Button variant="link">Sign Up</Button>
            </CardAction>
        </CardHeader>
        <CardContent>
            <form>
                <div class="grid w-full items-center gap-4">
                    <div class="flex flex-col space-y-1.5">
                        <Label for="email">Email</Label>
                        <Input
                            id="email"
                            placeholder="m@example.com"
                            type="email"
                        />
                    </div>
                    <div class="flex flex-col space-y-1.5">
                        <div class="flex items-center">
                            <Label for="password">Password</Label>
                            <a
                                class="ml-auto inline-block text-sm underline"
                                href="#"
                            >
                                Forgot your password?
                            </a>
                        </div>
                        <Input
                            id="password"
                            type="password"
                        />
                    </div>
                </div>
            </form>
        </CardContent>
        <CardFooter class="flex flex-col gap-2">
            <Button class="w-full">Login</Button>
            <Button
                class="w-full"
                variant="outline"
            >
                Login with Google
            </Button>
        </CardFooter>
    </Card>
</template>

<script lang="ts" setup>
import { Button } from '@/components/ui/button'
/**
 * TODO:由于不是nuxt项目，路径别名只能使用‘@’ ，不使用 '~'的话
 * 使用'@/registry/ui/card' 而不是 '~/components/ui/card'时，
 * 生成registry.json文件的时会被当成registryDependencies依赖的是官方组件，而不是 自定义的组件路径'~/components/ui/card'；
 * 所以需要添加路径别名'~'配置
 */
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '~/registry/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
</script>
