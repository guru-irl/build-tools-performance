import React from 'react';
const LABEL_22177 = 'component_22177';
export function Component22177({ value = 22177, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22177, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22177, 'data-value': derived.doubled }, children);
}
export default Component22177;
