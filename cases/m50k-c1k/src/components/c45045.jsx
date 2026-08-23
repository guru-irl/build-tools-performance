import React from 'react';
const LABEL_45045 = 'component_45045';
export function Component45045({ value = 45045, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45045, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45045, 'data-value': derived.doubled }, children);
}
export default Component45045;
