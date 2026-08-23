import React from 'react';
const LABEL_35540 = 'component_35540';
export function Component35540({ value = 35540, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35540, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35540, 'data-value': derived.doubled }, children);
}
export default Component35540;
