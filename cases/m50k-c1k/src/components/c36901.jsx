import React from 'react';
const LABEL_36901 = 'component_36901';
export function Component36901({ value = 36901, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36901, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36901, 'data-value': derived.doubled }, children);
}
export default Component36901;
