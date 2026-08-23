import React from 'react';
const LABEL_45861 = 'component_45861';
export function Component45861({ value = 45861, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45861, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45861, 'data-value': derived.doubled }, children);
}
export default Component45861;
