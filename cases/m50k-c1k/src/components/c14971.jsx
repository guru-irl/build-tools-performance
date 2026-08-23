import React from 'react';
const LABEL_14971 = 'component_14971';
export function Component14971({ value = 14971, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14971, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14971, 'data-value': derived.doubled }, children);
}
export default Component14971;
