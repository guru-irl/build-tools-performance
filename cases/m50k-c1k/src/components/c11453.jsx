import React from 'react';
const LABEL_11453 = 'component_11453';
export function Component11453({ value = 11453, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11453, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11453, 'data-value': derived.doubled }, children);
}
export default Component11453;
