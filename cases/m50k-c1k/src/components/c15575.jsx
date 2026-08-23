import React from 'react';
const LABEL_15575 = 'component_15575';
export function Component15575({ value = 15575, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15575, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15575, 'data-value': derived.doubled }, children);
}
export default Component15575;
