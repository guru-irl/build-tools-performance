import React from 'react';
const LABEL_1749 = 'component_1749';
export function Component1749({ value = 1749, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1749, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1749, 'data-value': derived.doubled }, children);
}
export default Component1749;
