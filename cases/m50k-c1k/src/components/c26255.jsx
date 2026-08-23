import React from 'react';
const LABEL_26255 = 'component_26255';
export function Component26255({ value = 26255, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26255, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26255, 'data-value': derived.doubled }, children);
}
export default Component26255;
