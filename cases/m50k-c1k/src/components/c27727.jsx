import React from 'react';
const LABEL_27727 = 'component_27727';
export function Component27727({ value = 27727, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27727, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27727, 'data-value': derived.doubled }, children);
}
export default Component27727;
