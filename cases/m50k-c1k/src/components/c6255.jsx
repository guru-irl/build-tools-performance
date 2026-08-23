import React from 'react';
const LABEL_6255 = 'component_6255';
export function Component6255({ value = 6255, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6255, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6255, 'data-value': derived.doubled }, children);
}
export default Component6255;
