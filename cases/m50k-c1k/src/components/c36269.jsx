import React from 'react';
const LABEL_36269 = 'component_36269';
export function Component36269({ value = 36269, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36269, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36269, 'data-value': derived.doubled }, children);
}
export default Component36269;
