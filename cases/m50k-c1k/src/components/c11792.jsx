import React from 'react';
const LABEL_11792 = 'component_11792';
export function Component11792({ value = 11792, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11792, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11792, 'data-value': derived.doubled }, children);
}
export default Component11792;
