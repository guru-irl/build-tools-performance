import React from 'react';
const LABEL_10337 = 'component_10337';
export function Component10337({ value = 10337, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10337, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10337, 'data-value': derived.doubled }, children);
}
export default Component10337;
