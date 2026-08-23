import React from 'react';
const LABEL_15255 = 'component_15255';
export function Component15255({ value = 15255, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15255, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15255, 'data-value': derived.doubled }, children);
}
export default Component15255;
