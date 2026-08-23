import React from 'react';
const LABEL_27476 = 'component_27476';
export function Component27476({ value = 27476, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27476, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27476, 'data-value': derived.doubled }, children);
}
export default Component27476;
