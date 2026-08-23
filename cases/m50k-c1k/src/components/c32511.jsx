import React from 'react';
const LABEL_32511 = 'component_32511';
export function Component32511({ value = 32511, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32511, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32511, 'data-value': derived.doubled }, children);
}
export default Component32511;
