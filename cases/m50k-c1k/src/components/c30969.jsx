import React from 'react';
const LABEL_30969 = 'component_30969';
export function Component30969({ value = 30969, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30969, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30969, 'data-value': derived.doubled }, children);
}
export default Component30969;
