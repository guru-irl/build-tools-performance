import React from 'react';
const LABEL_3127 = 'component_3127';
export function Component3127({ value = 3127, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3127, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3127, 'data-value': derived.doubled }, children);
}
export default Component3127;
