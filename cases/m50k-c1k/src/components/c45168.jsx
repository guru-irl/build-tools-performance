import React from 'react';
const LABEL_45168 = 'component_45168';
export function Component45168({ value = 45168, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45168, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45168, 'data-value': derived.doubled }, children);
}
export default Component45168;
