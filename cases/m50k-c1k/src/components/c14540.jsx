import React from 'react';
const LABEL_14540 = 'component_14540';
export function Component14540({ value = 14540, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14540, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14540, 'data-value': derived.doubled }, children);
}
export default Component14540;
