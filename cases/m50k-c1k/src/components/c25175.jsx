import React from 'react';
const LABEL_25175 = 'component_25175';
export function Component25175({ value = 25175, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25175, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25175, 'data-value': derived.doubled }, children);
}
export default Component25175;
