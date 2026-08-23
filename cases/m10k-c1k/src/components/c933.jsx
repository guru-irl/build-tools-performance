import React from 'react';
const LABEL_933 = 'component_933';
export function Component933({ value = 933, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_933, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_933, 'data-value': derived.doubled }, children);
}
export default Component933;
