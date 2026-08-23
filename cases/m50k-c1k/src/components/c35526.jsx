import React from 'react';
const LABEL_35526 = 'component_35526';
export function Component35526({ value = 35526, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35526, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35526, 'data-value': derived.doubled }, children);
}
export default Component35526;
