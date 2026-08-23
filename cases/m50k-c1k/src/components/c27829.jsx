import React from 'react';
const LABEL_27829 = 'component_27829';
export function Component27829({ value = 27829, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27829, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27829, 'data-value': derived.doubled }, children);
}
export default Component27829;
