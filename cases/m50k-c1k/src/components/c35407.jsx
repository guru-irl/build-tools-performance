import React from 'react';
const LABEL_35407 = 'component_35407';
export function Component35407({ value = 35407, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35407, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35407, 'data-value': derived.doubled }, children);
}
export default Component35407;
