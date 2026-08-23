import React from 'react';
const LABEL_27255 = 'component_27255';
export function Component27255({ value = 27255, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27255, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27255, 'data-value': derived.doubled }, children);
}
export default Component27255;
