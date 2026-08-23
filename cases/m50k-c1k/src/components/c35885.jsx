import React from 'react';
const LABEL_35885 = 'component_35885';
export function Component35885({ value = 35885, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35885, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35885, 'data-value': derived.doubled }, children);
}
export default Component35885;
