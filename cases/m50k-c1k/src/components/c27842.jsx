import React from 'react';
const LABEL_27842 = 'component_27842';
export function Component27842({ value = 27842, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27842, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27842, 'data-value': derived.doubled }, children);
}
export default Component27842;
