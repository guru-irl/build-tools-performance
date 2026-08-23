import React from 'react';
const LABEL_22540 = 'component_22540';
export function Component22540({ value = 22540, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22540, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22540, 'data-value': derived.doubled }, children);
}
export default Component22540;
