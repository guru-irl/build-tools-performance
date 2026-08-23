import React from 'react';
const LABEL_22012 = 'component_22012';
export function Component22012({ value = 22012, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22012, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22012, 'data-value': derived.doubled }, children);
}
export default Component22012;
