import React from 'react';
const LABEL_25540 = 'component_25540';
export function Component25540({ value = 25540, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25540, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25540, 'data-value': derived.doubled }, children);
}
export default Component25540;
