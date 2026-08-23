import React from 'react';
const LABEL_12819 = 'component_12819';
export function Component12819({ value = 12819, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12819, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12819, 'data-value': derived.doubled }, children);
}
export default Component12819;
