import React from 'react';
const LABEL_11402 = 'component_11402';
export function Component11402({ value = 11402, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11402, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11402, 'data-value': derived.doubled }, children);
}
export default Component11402;
