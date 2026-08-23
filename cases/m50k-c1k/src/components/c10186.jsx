import React from 'react';
const LABEL_10186 = 'component_10186';
export function Component10186({ value = 10186, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10186, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10186, 'data-value': derived.doubled }, children);
}
export default Component10186;
