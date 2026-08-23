import React from 'react';
const LABEL_6511 = 'component_6511';
export function Component6511({ value = 6511, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6511, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6511, 'data-value': derived.doubled }, children);
}
export default Component6511;
