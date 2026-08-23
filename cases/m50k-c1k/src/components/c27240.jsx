import React from 'react';
const LABEL_27240 = 'component_27240';
export function Component27240({ value = 27240, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27240, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27240, 'data-value': derived.doubled }, children);
}
export default Component27240;
