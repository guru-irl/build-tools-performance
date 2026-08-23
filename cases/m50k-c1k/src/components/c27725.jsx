import React from 'react';
const LABEL_27725 = 'component_27725';
export function Component27725({ value = 27725, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27725, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27725, 'data-value': derived.doubled }, children);
}
export default Component27725;
