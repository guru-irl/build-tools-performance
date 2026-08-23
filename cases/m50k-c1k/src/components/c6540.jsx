import React from 'react';
const LABEL_6540 = 'component_6540';
export function Component6540({ value = 6540, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6540, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6540, 'data-value': derived.doubled }, children);
}
export default Component6540;
