import React from 'react';
const LABEL_39540 = 'component_39540';
export function Component39540({ value = 39540, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39540, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39540, 'data-value': derived.doubled }, children);
}
export default Component39540;
