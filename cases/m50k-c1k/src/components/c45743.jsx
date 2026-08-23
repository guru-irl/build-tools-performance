import React from 'react';
const LABEL_45743 = 'component_45743';
export function Component45743({ value = 45743, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45743, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45743, 'data-value': derived.doubled }, children);
}
export default Component45743;
