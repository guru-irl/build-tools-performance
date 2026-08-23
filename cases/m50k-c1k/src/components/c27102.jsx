import React from 'react';
const LABEL_27102 = 'component_27102';
export function Component27102({ value = 27102, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27102, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27102, 'data-value': derived.doubled }, children);
}
export default Component27102;
