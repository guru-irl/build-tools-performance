import React from 'react';
const LABEL_34829 = 'component_34829';
export function Component34829({ value = 34829, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34829, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34829, 'data-value': derived.doubled }, children);
}
export default Component34829;
