import React from 'react';
const LABEL_6575 = 'component_6575';
export function Component6575({ value = 6575, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6575, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6575, 'data-value': derived.doubled }, children);
}
export default Component6575;
