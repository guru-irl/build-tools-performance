import React from 'react';
const LABEL_35850 = 'component_35850';
export function Component35850({ value = 35850, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35850, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35850, 'data-value': derived.doubled }, children);
}
export default Component35850;
