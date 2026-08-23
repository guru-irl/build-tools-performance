import React from 'react';
const LABEL_21511 = 'component_21511';
export function Component21511({ value = 21511, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21511, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21511, 'data-value': derived.doubled }, children);
}
export default Component21511;
