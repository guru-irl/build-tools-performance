import React from 'react';
const LABEL_21916 = 'component_21916';
export function Component21916({ value = 21916, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21916, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21916, 'data-value': derived.doubled }, children);
}
export default Component21916;
