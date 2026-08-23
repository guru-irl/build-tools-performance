import React from 'react';
const LABEL_10323 = 'component_10323';
export function Component10323({ value = 10323, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10323, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10323, 'data-value': derived.doubled }, children);
}
export default Component10323;
