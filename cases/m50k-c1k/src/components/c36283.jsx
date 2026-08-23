import React from 'react';
const LABEL_36283 = 'component_36283';
export function Component36283({ value = 36283, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36283, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36283, 'data-value': derived.doubled }, children);
}
export default Component36283;
