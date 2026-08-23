import React from 'react';
const LABEL_32211 = 'component_32211';
export function Component32211({ value = 32211, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32211, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32211, 'data-value': derived.doubled }, children);
}
export default Component32211;
