import React from 'react';
const LABEL_26242 = 'component_26242';
export function Component26242({ value = 26242, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26242, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26242, 'data-value': derived.doubled }, children);
}
export default Component26242;
