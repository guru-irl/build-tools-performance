import React from 'react';
const LABEL_27573 = 'component_27573';
export function Component27573({ value = 27573, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27573, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27573, 'data-value': derived.doubled }, children);
}
export default Component27573;
