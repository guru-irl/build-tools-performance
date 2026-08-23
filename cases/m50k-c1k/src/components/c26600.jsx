import React from 'react';
const LABEL_26600 = 'component_26600';
export function Component26600({ value = 26600, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26600, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26600, 'data-value': derived.doubled }, children);
}
export default Component26600;
