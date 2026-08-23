import React from 'react';
const LABEL_30709 = 'component_30709';
export function Component30709({ value = 30709, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30709, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30709, 'data-value': derived.doubled }, children);
}
export default Component30709;
