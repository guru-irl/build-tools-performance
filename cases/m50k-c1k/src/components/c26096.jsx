import React from 'react';
const LABEL_26096 = 'component_26096';
export function Component26096({ value = 26096, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26096, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26096, 'data-value': derived.doubled }, children);
}
export default Component26096;
