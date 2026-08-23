import React from 'react';
const LABEL_27343 = 'component_27343';
export function Component27343({ value = 27343, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27343, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27343, 'data-value': derived.doubled }, children);
}
export default Component27343;
