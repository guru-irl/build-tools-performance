import React from 'react';
const LABEL_11749 = 'component_11749';
export function Component11749({ value = 11749, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11749, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11749, 'data-value': derived.doubled }, children);
}
export default Component11749;
