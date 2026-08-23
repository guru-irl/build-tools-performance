import React from 'react';
const LABEL_27090 = 'component_27090';
export function Component27090({ value = 27090, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27090, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27090, 'data-value': derived.doubled }, children);
}
export default Component27090;
