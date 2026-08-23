import React from 'react';
const LABEL_21540 = 'component_21540';
export function Component21540({ value = 21540, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21540, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21540, 'data-value': derived.doubled }, children);
}
export default Component21540;
