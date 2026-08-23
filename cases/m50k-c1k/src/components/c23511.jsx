import React from 'react';
const LABEL_23511 = 'component_23511';
export function Component23511({ value = 23511, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23511, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23511, 'data-value': derived.doubled }, children);
}
export default Component23511;
