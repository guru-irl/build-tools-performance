import React from 'react';
const LABEL_43337 = 'component_43337';
export function Component43337({ value = 43337, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43337, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43337, 'data-value': derived.doubled }, children);
}
export default Component43337;
