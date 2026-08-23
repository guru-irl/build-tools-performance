import React from 'react';
const LABEL_13255 = 'component_13255';
export function Component13255({ value = 13255, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13255, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13255, 'data-value': derived.doubled }, children);
}
export default Component13255;
