import React from 'react';
const LABEL_33323 = 'component_33323';
export function Component33323({ value = 33323, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33323, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33323, 'data-value': derived.doubled }, children);
}
export default Component33323;
