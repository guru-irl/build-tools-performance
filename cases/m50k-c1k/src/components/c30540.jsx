import React from 'react';
const LABEL_30540 = 'component_30540';
export function Component30540({ value = 30540, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30540, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30540, 'data-value': derived.doubled }, children);
}
export default Component30540;
