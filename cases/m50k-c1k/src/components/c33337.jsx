import React from 'react';
const LABEL_33337 = 'component_33337';
export function Component33337({ value = 33337, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33337, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33337, 'data-value': derived.doubled }, children);
}
export default Component33337;
