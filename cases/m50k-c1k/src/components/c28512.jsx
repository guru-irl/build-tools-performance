import React from 'react';
const LABEL_28512 = 'component_28512';
export function Component28512({ value = 28512, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28512, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28512, 'data-value': derived.doubled }, children);
}
export default Component28512;
