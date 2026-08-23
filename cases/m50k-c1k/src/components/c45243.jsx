import React from 'react';
const LABEL_45243 = 'component_45243';
export function Component45243({ value = 45243, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45243, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45243, 'data-value': derived.doubled }, children);
}
export default Component45243;
