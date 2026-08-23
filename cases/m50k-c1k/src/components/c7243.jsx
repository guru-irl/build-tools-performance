import React from 'react';
const LABEL_7243 = 'component_7243';
export function Component7243({ value = 7243, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7243, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7243, 'data-value': derived.doubled }, children);
}
export default Component7243;
