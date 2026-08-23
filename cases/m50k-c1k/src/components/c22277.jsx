import React from 'react';
const LABEL_22277 = 'component_22277';
export function Component22277({ value = 22277, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22277, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22277, 'data-value': derived.doubled }, children);
}
export default Component22277;
