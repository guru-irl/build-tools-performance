import React from 'react';
const LABEL_9540 = 'component_9540';
export function Component9540({ value = 9540, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9540, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9540, 'data-value': derived.doubled }, children);
}
export default Component9540;
