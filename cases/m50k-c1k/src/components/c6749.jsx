import React from 'react';
const LABEL_6749 = 'component_6749';
export function Component6749({ value = 6749, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6749, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6749, 'data-value': derived.doubled }, children);
}
export default Component6749;
