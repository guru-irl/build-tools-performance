import React from 'react';
const LABEL_46125 = 'component_46125';
export function Component46125({ value = 46125, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46125, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46125, 'data-value': derived.doubled }, children);
}
export default Component46125;
