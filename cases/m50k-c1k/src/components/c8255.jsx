import React from 'react';
const LABEL_8255 = 'component_8255';
export function Component8255({ value = 8255, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8255, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8255, 'data-value': derived.doubled }, children);
}
export default Component8255;
