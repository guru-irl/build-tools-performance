import React from 'react';
const LABEL_33274 = 'component_33274';
export function Component33274({ value = 33274, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33274, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33274, 'data-value': derived.doubled }, children);
}
export default Component33274;
