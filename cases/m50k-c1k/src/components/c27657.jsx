import React from 'react';
const LABEL_27657 = 'component_27657';
export function Component27657({ value = 27657, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27657, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27657, 'data-value': derived.doubled }, children);
}
export default Component27657;
