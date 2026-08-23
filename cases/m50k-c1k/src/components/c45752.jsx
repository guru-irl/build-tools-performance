import React from 'react';
const LABEL_45752 = 'component_45752';
export function Component45752({ value = 45752, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45752, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45752, 'data-value': derived.doubled }, children);
}
export default Component45752;
