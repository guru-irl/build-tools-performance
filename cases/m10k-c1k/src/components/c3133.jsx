import React from 'react';
const LABEL_3133 = 'component_3133';
export function Component3133({ value = 3133, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3133, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3133, 'data-value': derived.doubled }, children);
}
export default Component3133;
