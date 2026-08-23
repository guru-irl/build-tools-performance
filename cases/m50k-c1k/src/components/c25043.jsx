import React from 'react';
const LABEL_25043 = 'component_25043';
export function Component25043({ value = 25043, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25043, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25043, 'data-value': derived.doubled }, children);
}
export default Component25043;
