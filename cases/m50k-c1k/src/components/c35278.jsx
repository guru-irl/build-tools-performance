import React from 'react';
const LABEL_35278 = 'component_35278';
export function Component35278({ value = 35278, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35278, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35278, 'data-value': derived.doubled }, children);
}
export default Component35278;
