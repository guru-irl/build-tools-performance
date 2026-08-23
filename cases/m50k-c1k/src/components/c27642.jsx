import React from 'react';
const LABEL_27642 = 'component_27642';
export function Component27642({ value = 27642, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27642, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27642, 'data-value': derived.doubled }, children);
}
export default Component27642;
