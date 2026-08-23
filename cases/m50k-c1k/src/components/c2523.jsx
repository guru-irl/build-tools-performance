import React from 'react';
const LABEL_2523 = 'component_2523';
export function Component2523({ value = 2523, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2523, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2523, 'data-value': derived.doubled }, children);
}
export default Component2523;
