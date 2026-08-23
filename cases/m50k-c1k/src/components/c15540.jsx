import React from 'react';
const LABEL_15540 = 'component_15540';
export function Component15540({ value = 15540, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15540, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15540, 'data-value': derived.doubled }, children);
}
export default Component15540;
