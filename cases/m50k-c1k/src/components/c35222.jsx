import React from 'react';
const LABEL_35222 = 'component_35222';
export function Component35222({ value = 35222, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35222, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35222, 'data-value': derived.doubled }, children);
}
export default Component35222;
