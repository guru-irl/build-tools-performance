import React from 'react';
const LABEL_35575 = 'component_35575';
export function Component35575({ value = 35575, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35575, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35575, 'data-value': derived.doubled }, children);
}
export default Component35575;
