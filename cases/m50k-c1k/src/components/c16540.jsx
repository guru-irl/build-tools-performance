import React from 'react';
const LABEL_16540 = 'component_16540';
export function Component16540({ value = 16540, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16540, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16540, 'data-value': derived.doubled }, children);
}
export default Component16540;
