import React from 'react';
const LABEL_33850 = 'component_33850';
export function Component33850({ value = 33850, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33850, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33850, 'data-value': derived.doubled }, children);
}
export default Component33850;
