import React from 'react';
const LABEL_27673 = 'component_27673';
export function Component27673({ value = 27673, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27673, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27673, 'data-value': derived.doubled }, children);
}
export default Component27673;
