import React from 'react';
const LABEL_17564 = 'component_17564';
export function Component17564({ value = 17564, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17564, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17564, 'data-value': derived.doubled }, children);
}
export default Component17564;
