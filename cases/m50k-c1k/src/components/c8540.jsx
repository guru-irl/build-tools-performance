import React from 'react';
const LABEL_8540 = 'component_8540';
export function Component8540({ value = 8540, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8540, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8540, 'data-value': derived.doubled }, children);
}
export default Component8540;
