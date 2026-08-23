import React from 'react';
const LABEL_35757 = 'component_35757';
export function Component35757({ value = 35757, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35757, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35757, 'data-value': derived.doubled }, children);
}
export default Component35757;
