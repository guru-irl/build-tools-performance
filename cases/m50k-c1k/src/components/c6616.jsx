import React from 'react';
const LABEL_6616 = 'component_6616';
export function Component6616({ value = 6616, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6616, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6616, 'data-value': derived.doubled }, children);
}
export default Component6616;
