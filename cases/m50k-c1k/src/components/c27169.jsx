import React from 'react';
const LABEL_27169 = 'component_27169';
export function Component27169({ value = 27169, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27169, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27169, 'data-value': derived.doubled }, children);
}
export default Component27169;
