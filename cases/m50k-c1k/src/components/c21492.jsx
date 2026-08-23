import React from 'react';
const LABEL_21492 = 'component_21492';
export function Component21492({ value = 21492, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21492, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21492, 'data-value': derived.doubled }, children);
}
export default Component21492;
