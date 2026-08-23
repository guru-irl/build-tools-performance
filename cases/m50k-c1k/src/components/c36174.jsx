import React from 'react';
const LABEL_36174 = 'component_36174';
export function Component36174({ value = 36174, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36174, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36174, 'data-value': derived.doubled }, children);
}
export default Component36174;
