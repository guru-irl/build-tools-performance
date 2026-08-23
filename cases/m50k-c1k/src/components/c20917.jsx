import React from 'react';
const LABEL_20917 = 'component_20917';
export function Component20917({ value = 20917, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20917, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20917, 'data-value': derived.doubled }, children);
}
export default Component20917;
