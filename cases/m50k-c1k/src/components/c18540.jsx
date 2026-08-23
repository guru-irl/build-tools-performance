import React from 'react';
const LABEL_18540 = 'component_18540';
export function Component18540({ value = 18540, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18540, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18540, 'data-value': derived.doubled }, children);
}
export default Component18540;
