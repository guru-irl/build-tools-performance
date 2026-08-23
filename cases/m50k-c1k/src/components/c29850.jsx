import React from 'react';
const LABEL_29850 = 'component_29850';
export function Component29850({ value = 29850, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29850, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29850, 'data-value': derived.doubled }, children);
}
export default Component29850;
