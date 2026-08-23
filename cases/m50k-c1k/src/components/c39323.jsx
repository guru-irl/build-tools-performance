import React from 'react';
const LABEL_39323 = 'component_39323';
export function Component39323({ value = 39323, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39323, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39323, 'data-value': derived.doubled }, children);
}
export default Component39323;
