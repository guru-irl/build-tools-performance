import React from 'react';
const LABEL_36749 = 'component_36749';
export function Component36749({ value = 36749, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36749, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36749, 'data-value': derived.doubled }, children);
}
export default Component36749;
