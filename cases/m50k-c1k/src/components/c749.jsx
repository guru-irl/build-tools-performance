import React from 'react';
const LABEL_749 = 'component_749';
export function Component749({ value = 749, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_749, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_749, 'data-value': derived.doubled }, children);
}
export default Component749;
