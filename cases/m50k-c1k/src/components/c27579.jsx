import React from 'react';
const LABEL_27579 = 'component_27579';
export function Component27579({ value = 27579, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27579, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27579, 'data-value': derived.doubled }, children);
}
export default Component27579;
