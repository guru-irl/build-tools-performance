import React from 'react';
const LABEL_27515 = 'component_27515';
export function Component27515({ value = 27515, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27515, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27515, 'data-value': derived.doubled }, children);
}
export default Component27515;
