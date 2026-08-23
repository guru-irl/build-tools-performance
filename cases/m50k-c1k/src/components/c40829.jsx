import React from 'react';
const LABEL_40829 = 'component_40829';
export function Component40829({ value = 40829, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40829, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40829, 'data-value': derived.doubled }, children);
}
export default Component40829;
