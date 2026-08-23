import React from 'react';
const LABEL_11337 = 'component_11337';
export function Component11337({ value = 11337, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11337, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11337, 'data-value': derived.doubled }, children);
}
export default Component11337;
