import React from 'react';
const LABEL_19369 = 'component_19369';
export function Component19369({ value = 19369, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19369, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19369, 'data-value': derived.doubled }, children);
}
export default Component19369;
