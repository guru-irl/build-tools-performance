import React from 'react';
const LABEL_34278 = 'component_34278';
export function Component34278({ value = 34278, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34278, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34278, 'data-value': derived.doubled }, children);
}
export default Component34278;
