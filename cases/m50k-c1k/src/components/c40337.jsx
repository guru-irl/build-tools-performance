import React from 'react';
const LABEL_40337 = 'component_40337';
export function Component40337({ value = 40337, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40337, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40337, 'data-value': derived.doubled }, children);
}
export default Component40337;
