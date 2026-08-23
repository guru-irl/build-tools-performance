import React from 'react';
const LABEL_22511 = 'component_22511';
export function Component22511({ value = 22511, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22511, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22511, 'data-value': derived.doubled }, children);
}
export default Component22511;
