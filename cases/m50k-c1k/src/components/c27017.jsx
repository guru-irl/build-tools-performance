import React from 'react';
const LABEL_27017 = 'component_27017';
export function Component27017({ value = 27017, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27017, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27017, 'data-value': derived.doubled }, children);
}
export default Component27017;
