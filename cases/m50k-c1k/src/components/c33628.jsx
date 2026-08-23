import React from 'react';
const LABEL_33628 = 'component_33628';
export function Component33628({ value = 33628, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33628, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33628, 'data-value': derived.doubled }, children);
}
export default Component33628;
