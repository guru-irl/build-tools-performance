import React from 'react';
const LABEL_40255 = 'component_40255';
export function Component40255({ value = 40255, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40255, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40255, 'data-value': derived.doubled }, children);
}
export default Component40255;
