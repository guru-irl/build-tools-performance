import React from 'react';
const LABEL_33043 = 'component_33043';
export function Component33043({ value = 33043, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33043, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33043, 'data-value': derived.doubled }, children);
}
export default Component33043;
