import React from 'react';
const LABEL_45449 = 'component_45449';
export function Component45449({ value = 45449, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45449, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45449, 'data-value': derived.doubled }, children);
}
export default Component45449;
