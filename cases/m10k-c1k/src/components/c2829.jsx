import React from 'react';
const LABEL_2829 = 'component_2829';
export function Component2829({ value = 2829, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2829, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2829, 'data-value': derived.doubled }, children);
}
export default Component2829;
