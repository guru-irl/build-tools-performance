import React from 'react';
const LABEL_32749 = 'component_32749';
export function Component32749({ value = 32749, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32749, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32749, 'data-value': derived.doubled }, children);
}
export default Component32749;
