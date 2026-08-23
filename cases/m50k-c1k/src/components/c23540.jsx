import React from 'react';
const LABEL_23540 = 'component_23540';
export function Component23540({ value = 23540, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23540, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23540, 'data-value': derived.doubled }, children);
}
export default Component23540;
