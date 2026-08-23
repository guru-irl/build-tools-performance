import React from 'react';
const LABEL_42540 = 'component_42540';
export function Component42540({ value = 42540, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42540, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42540, 'data-value': derived.doubled }, children);
}
export default Component42540;
