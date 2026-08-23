import React from 'react';
const LABEL_33004 = 'component_33004';
export function Component33004({ value = 33004, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33004, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33004, 'data-value': derived.doubled }, children);
}
export default Component33004;
