import React from 'react';
const LABEL_323 = 'component_323';
export function Component323({ value = 323, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_323, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_323, 'data-value': derived.doubled }, children);
}
export default Component323;
