import React from 'react';
const LABEL_37540 = 'component_37540';
export function Component37540({ value = 37540, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37540, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37540, 'data-value': derived.doubled }, children);
}
export default Component37540;
