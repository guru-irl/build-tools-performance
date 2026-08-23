import React from 'react';
const LABEL_32696 = 'component_32696';
export function Component32696({ value = 32696, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32696, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32696, 'data-value': derived.doubled }, children);
}
export default Component32696;
