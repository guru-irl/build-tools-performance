import React from 'react';
const LABEL_11323 = 'component_11323';
export function Component11323({ value = 11323, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11323, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11323, 'data-value': derived.doubled }, children);
}
export default Component11323;
