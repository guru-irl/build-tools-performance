import React from 'react';
const LABEL_46255 = 'component_46255';
export function Component46255({ value = 46255, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46255, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46255, 'data-value': derived.doubled }, children);
}
export default Component46255;
