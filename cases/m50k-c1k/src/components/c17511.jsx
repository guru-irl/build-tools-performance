import React from 'react';
const LABEL_17511 = 'component_17511';
export function Component17511({ value = 17511, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17511, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17511, 'data-value': derived.doubled }, children);
}
export default Component17511;
