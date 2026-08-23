import React from 'react';
const LABEL_3514 = 'component_3514';
export function Component3514({ value = 3514, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3514, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3514, 'data-value': derived.doubled }, children);
}
export default Component3514;
