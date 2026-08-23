import React from 'react';
const LABEL_6337 = 'component_6337';
export function Component6337({ value = 6337, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6337, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6337, 'data-value': derived.doubled }, children);
}
export default Component6337;
