import React from 'react';
const LABEL_15850 = 'component_15850';
export function Component15850({ value = 15850, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15850, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15850, 'data-value': derived.doubled }, children);
}
export default Component15850;
