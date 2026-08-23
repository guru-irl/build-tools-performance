import React from 'react';
const LABEL_11812 = 'component_11812';
export function Component11812({ value = 11812, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11812, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11812, 'data-value': derived.doubled }, children);
}
export default Component11812;
