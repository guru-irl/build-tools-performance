import React from 'react';
const LABEL_27614 = 'component_27614';
export function Component27614({ value = 27614, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27614, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27614, 'data-value': derived.doubled }, children);
}
export default Component27614;
