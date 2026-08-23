import React from 'react';
const LABEL_22274 = 'component_22274';
export function Component22274({ value = 22274, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22274, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22274, 'data-value': derived.doubled }, children);
}
export default Component22274;
