import React from 'react';
const LABEL_3540 = 'component_3540';
export function Component3540({ value = 3540, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3540, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3540, 'data-value': derived.doubled }, children);
}
export default Component3540;
