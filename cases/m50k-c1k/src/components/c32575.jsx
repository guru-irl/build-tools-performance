import React from 'react';
const LABEL_32575 = 'component_32575';
export function Component32575({ value = 32575, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32575, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32575, 'data-value': derived.doubled }, children);
}
export default Component32575;
