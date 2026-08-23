import React from 'react';
const LABEL_42931 = 'component_42931';
export function Component42931({ value = 42931, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42931, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42931, 'data-value': derived.doubled }, children);
}
export default Component42931;
