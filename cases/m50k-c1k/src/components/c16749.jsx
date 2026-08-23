import React from 'react';
const LABEL_16749 = 'component_16749';
export function Component16749({ value = 16749, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16749, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16749, 'data-value': derived.doubled }, children);
}
export default Component16749;
