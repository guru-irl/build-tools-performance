import React from 'react';
const LABEL_2792 = 'component_2792';
export function Component2792({ value = 2792, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2792, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2792, 'data-value': derived.doubled }, children);
}
export default Component2792;
