import React from 'react';
const LABEL_23850 = 'component_23850';
export function Component23850({ value = 23850, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23850, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23850, 'data-value': derived.doubled }, children);
}
export default Component23850;
