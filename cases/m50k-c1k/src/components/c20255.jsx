import React from 'react';
const LABEL_20255 = 'component_20255';
export function Component20255({ value = 20255, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20255, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20255, 'data-value': derived.doubled }, children);
}
export default Component20255;
