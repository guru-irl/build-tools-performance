import React from 'react';
const LABEL_38278 = 'component_38278';
export function Component38278({ value = 38278, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38278, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38278, 'data-value': derived.doubled }, children);
}
export default Component38278;
