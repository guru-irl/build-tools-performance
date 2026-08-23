import React from 'react';
const LABEL_45767 = 'component_45767';
export function Component45767({ value = 45767, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45767, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45767, 'data-value': derived.doubled }, children);
}
export default Component45767;
