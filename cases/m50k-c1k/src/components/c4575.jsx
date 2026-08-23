import React from 'react';
const LABEL_4575 = 'component_4575';
export function Component4575({ value = 4575, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4575, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4575, 'data-value': derived.doubled }, children);
}
export default Component4575;
