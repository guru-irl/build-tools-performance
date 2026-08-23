import React from 'react';
const LABEL_596 = 'component_596';
export function Component596({ value = 596, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_596, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_596, 'data-value': derived.doubled }, children);
}
export default Component596;
