import React from 'react';
const LABEL_36540 = 'component_36540';
export function Component36540({ value = 36540, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36540, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36540, 'data-value': derived.doubled }, children);
}
export default Component36540;
