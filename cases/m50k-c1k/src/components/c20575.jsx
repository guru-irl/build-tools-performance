import React from 'react';
const LABEL_20575 = 'component_20575';
export function Component20575({ value = 20575, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20575, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20575, 'data-value': derived.doubled }, children);
}
export default Component20575;
