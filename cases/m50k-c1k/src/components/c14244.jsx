import React from 'react';
const LABEL_14244 = 'component_14244';
export function Component14244({ value = 14244, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14244, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14244, 'data-value': derived.doubled }, children);
}
export default Component14244;
