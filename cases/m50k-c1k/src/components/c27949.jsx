import React from 'react';
const LABEL_27949 = 'component_27949';
export function Component27949({ value = 27949, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27949, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27949, 'data-value': derived.doubled }, children);
}
export default Component27949;
