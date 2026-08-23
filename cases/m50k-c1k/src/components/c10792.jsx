import React from 'react';
const LABEL_10792 = 'component_10792';
export function Component10792({ value = 10792, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10792, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10792, 'data-value': derived.doubled }, children);
}
export default Component10792;
