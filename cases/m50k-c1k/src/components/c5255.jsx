import React from 'react';
const LABEL_5255 = 'component_5255';
export function Component5255({ value = 5255, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5255, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5255, 'data-value': derived.doubled }, children);
}
export default Component5255;
