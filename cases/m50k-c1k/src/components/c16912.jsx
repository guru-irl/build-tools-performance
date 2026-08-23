import React from 'react';
const LABEL_16912 = 'component_16912';
export function Component16912({ value = 16912, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16912, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16912, 'data-value': derived.doubled }, children);
}
export default Component16912;
