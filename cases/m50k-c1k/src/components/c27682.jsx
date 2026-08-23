import React from 'react';
const LABEL_27682 = 'component_27682';
export function Component27682({ value = 27682, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27682, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27682, 'data-value': derived.doubled }, children);
}
export default Component27682;
