import React from 'react';
const LABEL_21575 = 'component_21575';
export function Component21575({ value = 21575, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21575, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21575, 'data-value': derived.doubled }, children);
}
export default Component21575;
