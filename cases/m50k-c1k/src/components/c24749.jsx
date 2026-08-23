import React from 'react';
const LABEL_24749 = 'component_24749';
export function Component24749({ value = 24749, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24749, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24749, 'data-value': derived.doubled }, children);
}
export default Component24749;
