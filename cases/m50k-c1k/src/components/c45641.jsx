import React from 'react';
const LABEL_45641 = 'component_45641';
export function Component45641({ value = 45641, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45641, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45641, 'data-value': derived.doubled }, children);
}
export default Component45641;
