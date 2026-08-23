import React from 'react';
const LABEL_38847 = 'component_38847';
export function Component38847({ value = 38847, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38847, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38847, 'data-value': derived.doubled }, children);
}
export default Component38847;
