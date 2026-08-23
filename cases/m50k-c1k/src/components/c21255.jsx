import React from 'react';
const LABEL_21255 = 'component_21255';
export function Component21255({ value = 21255, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21255, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21255, 'data-value': derived.doubled }, children);
}
export default Component21255;
