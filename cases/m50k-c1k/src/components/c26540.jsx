import React from 'react';
const LABEL_26540 = 'component_26540';
export function Component26540({ value = 26540, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26540, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26540, 'data-value': derived.doubled }, children);
}
export default Component26540;
