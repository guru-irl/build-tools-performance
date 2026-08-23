import React from 'react';
const LABEL_39923 = 'component_39923';
export function Component39923({ value = 39923, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39923, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39923, 'data-value': derived.doubled }, children);
}
export default Component39923;
