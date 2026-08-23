import React from 'react';
const LABEL_18575 = 'component_18575';
export function Component18575({ value = 18575, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18575, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18575, 'data-value': derived.doubled }, children);
}
export default Component18575;
