import React from 'react';
const LABEL_29318 = 'component_29318';
export function Component29318({ value = 29318, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29318, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29318, 'data-value': derived.doubled }, children);
}
export default Component29318;
