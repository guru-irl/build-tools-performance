import React from 'react';
const LABEL_26158 = 'component_26158';
export function Component26158({ value = 26158, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26158, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26158, 'data-value': derived.doubled }, children);
}
export default Component26158;
