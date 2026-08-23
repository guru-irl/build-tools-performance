import React from 'react';
const LABEL_19453 = 'component_19453';
export function Component19453({ value = 19453, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19453, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19453, 'data-value': derived.doubled }, children);
}
export default Component19453;
