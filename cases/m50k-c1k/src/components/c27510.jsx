import React from 'react';
const LABEL_27510 = 'component_27510';
export function Component27510({ value = 27510, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27510, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27510, 'data-value': derived.doubled }, children);
}
export default Component27510;
