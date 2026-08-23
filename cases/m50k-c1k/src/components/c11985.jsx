import React from 'react';
const LABEL_11985 = 'component_11985';
export function Component11985({ value = 11985, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11985, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11985, 'data-value': derived.doubled }, children);
}
export default Component11985;
