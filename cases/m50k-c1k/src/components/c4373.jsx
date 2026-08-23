import React from 'react';
const LABEL_4373 = 'component_4373';
export function Component4373({ value = 4373, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4373, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4373, 'data-value': derived.doubled }, children);
}
export default Component4373;
