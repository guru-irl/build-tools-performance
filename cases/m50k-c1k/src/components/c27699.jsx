import React from 'react';
const LABEL_27699 = 'component_27699';
export function Component27699({ value = 27699, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27699, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27699, 'data-value': derived.doubled }, children);
}
export default Component27699;
