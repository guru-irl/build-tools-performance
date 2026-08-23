import React from 'react';
const LABEL_3121 = 'component_3121';
export function Component3121({ value = 3121, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3121, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3121, 'data-value': derived.doubled }, children);
}
export default Component3121;
