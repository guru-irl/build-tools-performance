import React from 'react';
const LABEL_45216 = 'component_45216';
export function Component45216({ value = 45216, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45216, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45216, 'data-value': derived.doubled }, children);
}
export default Component45216;
