import React from 'react';
const LABEL_39255 = 'component_39255';
export function Component39255({ value = 39255, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39255, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39255, 'data-value': derived.doubled }, children);
}
export default Component39255;
