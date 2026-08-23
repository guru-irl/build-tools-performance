import React from 'react';
const LABEL_11521 = 'component_11521';
export function Component11521({ value = 11521, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11521, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11521, 'data-value': derived.doubled }, children);
}
export default Component11521;
