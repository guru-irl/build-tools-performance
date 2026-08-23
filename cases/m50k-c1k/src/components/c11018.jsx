import React from 'react';
const LABEL_11018 = 'component_11018';
export function Component11018({ value = 11018, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11018, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11018, 'data-value': derived.doubled }, children);
}
export default Component11018;
