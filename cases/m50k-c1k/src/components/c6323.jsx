import React from 'react';
const LABEL_6323 = 'component_6323';
export function Component6323({ value = 6323, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6323, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6323, 'data-value': derived.doubled }, children);
}
export default Component6323;
