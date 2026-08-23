import React from 'react';
const LABEL_25278 = 'component_25278';
export function Component25278({ value = 25278, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25278, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25278, 'data-value': derived.doubled }, children);
}
export default Component25278;
