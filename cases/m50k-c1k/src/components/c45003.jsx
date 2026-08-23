import React from 'react';
const LABEL_45003 = 'component_45003';
export function Component45003({ value = 45003, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45003, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45003, 'data-value': derived.doubled }, children);
}
export default Component45003;
