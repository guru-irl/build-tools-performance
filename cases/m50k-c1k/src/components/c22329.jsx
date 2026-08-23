import React from 'react';
const LABEL_22329 = 'component_22329';
export function Component22329({ value = 22329, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22329, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22329, 'data-value': derived.doubled }, children);
}
export default Component22329;
