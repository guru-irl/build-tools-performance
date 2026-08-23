import React from 'react';
const LABEL_39646 = 'component_39646';
export function Component39646({ value = 39646, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39646, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39646, 'data-value': derived.doubled }, children);
}
export default Component39646;
