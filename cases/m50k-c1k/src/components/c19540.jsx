import React from 'react';
const LABEL_19540 = 'component_19540';
export function Component19540({ value = 19540, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19540, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19540, 'data-value': derived.doubled }, children);
}
export default Component19540;
