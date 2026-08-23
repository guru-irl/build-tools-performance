import React from 'react';
const LABEL_36923 = 'component_36923';
export function Component36923({ value = 36923, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36923, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36923, 'data-value': derived.doubled }, children);
}
export default Component36923;
