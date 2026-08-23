import React from 'react';
const LABEL_12540 = 'component_12540';
export function Component12540({ value = 12540, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12540, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12540, 'data-value': derived.doubled }, children);
}
export default Component12540;
