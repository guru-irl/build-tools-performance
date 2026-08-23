import React from 'react';
const LABEL_11097 = 'component_11097';
export function Component11097({ value = 11097, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11097, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11097, 'data-value': derived.doubled }, children);
}
export default Component11097;
