import React from 'react';
const LABEL_27525 = 'component_27525';
export function Component27525({ value = 27525, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27525, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27525, 'data-value': derived.doubled }, children);
}
export default Component27525;
