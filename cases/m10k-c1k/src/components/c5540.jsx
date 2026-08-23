import React from 'react';
const LABEL_5540 = 'component_5540';
export function Component5540({ value = 5540, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5540, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5540, 'data-value': derived.doubled }, children);
}
export default Component5540;
