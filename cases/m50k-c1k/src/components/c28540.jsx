import React from 'react';
const LABEL_28540 = 'component_28540';
export function Component28540({ value = 28540, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28540, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28540, 'data-value': derived.doubled }, children);
}
export default Component28540;
