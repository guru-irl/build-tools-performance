import React from 'react';
const LABEL_23337 = 'component_23337';
export function Component23337({ value = 23337, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23337, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23337, 'data-value': derived.doubled }, children);
}
export default Component23337;
