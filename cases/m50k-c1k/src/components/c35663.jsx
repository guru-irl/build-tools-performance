import React from 'react';
const LABEL_35663 = 'component_35663';
export function Component35663({ value = 35663, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35663, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35663, 'data-value': derived.doubled }, children);
}
export default Component35663;
