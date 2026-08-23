import React from 'react';
const LABEL_19859 = 'component_19859';
export function Component19859({ value = 19859, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19859, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19859, 'data-value': derived.doubled }, children);
}
export default Component19859;
