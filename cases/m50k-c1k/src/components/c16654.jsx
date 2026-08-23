import React from 'react';
const LABEL_16654 = 'component_16654';
export function Component16654({ value = 16654, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16654, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16654, 'data-value': derived.doubled }, children);
}
export default Component16654;
