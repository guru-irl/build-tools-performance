import React from 'react';
const LABEL_27077 = 'component_27077';
export function Component27077({ value = 27077, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27077, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27077, 'data-value': derived.doubled }, children);
}
export default Component27077;
