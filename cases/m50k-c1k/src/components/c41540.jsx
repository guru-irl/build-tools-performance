import React from 'react';
const LABEL_41540 = 'component_41540';
export function Component41540({ value = 41540, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41540, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41540, 'data-value': derived.doubled }, children);
}
export default Component41540;
