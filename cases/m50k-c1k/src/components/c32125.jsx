import React from 'react';
const LABEL_32125 = 'component_32125';
export function Component32125({ value = 32125, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32125, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32125, 'data-value': derived.doubled }, children);
}
export default Component32125;
