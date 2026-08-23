import React from 'react';
const LABEL_22829 = 'component_22829';
export function Component22829({ value = 22829, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22829, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22829, 'data-value': derived.doubled }, children);
}
export default Component22829;
