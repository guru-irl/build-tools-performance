import React from 'react';
const LABEL_35718 = 'component_35718';
export function Component35718({ value = 35718, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35718, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35718, 'data-value': derived.doubled }, children);
}
export default Component35718;
