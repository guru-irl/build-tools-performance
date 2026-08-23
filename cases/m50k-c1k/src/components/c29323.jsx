import React from 'react';
const LABEL_29323 = 'component_29323';
export function Component29323({ value = 29323, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29323, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29323, 'data-value': derived.doubled }, children);
}
export default Component29323;
