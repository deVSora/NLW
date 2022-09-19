import * as Select from '@radix-ui/react-select'
import { SelectItemProps } from '@radix-ui/react-select'
import { ProjectorScreen } from 'phosphor-react';

interface Props extends SelectItemProps {
    text: string
}

export function SelectItem(props: Props) {
    return (
        <Select.Item {...props} className="hover:bg-zinc-600 cursor-pointer p-2 text-white">
            <Select.ItemText >
                {props.text}
            </Select.ItemText >
            <Select.ItemIndicator />
        </Select.Item>
    )
}