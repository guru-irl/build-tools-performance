import React from 'react';
const LABEL_35542 = 'component_35542';
export function Component35542({ value = 35542, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35542, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35542, 'data-value': derived.doubled }, children);
}
export default Component35542;
