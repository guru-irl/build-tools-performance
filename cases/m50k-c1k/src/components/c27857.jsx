import React from 'react';
const LABEL_27857 = 'component_27857';
export function Component27857({ value = 27857, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27857, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27857, 'data-value': derived.doubled }, children);
}
export default Component27857;
