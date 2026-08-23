import React from 'react';
const LABEL_8575 = 'component_8575';
export function Component8575({ value = 8575, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8575, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8575, 'data-value': derived.doubled }, children);
}
export default Component8575;
