import React from 'react';
const LABEL_10540 = 'component_10540';
export function Component10540({ value = 10540, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10540, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10540, 'data-value': derived.doubled }, children);
}
export default Component10540;
