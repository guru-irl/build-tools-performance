import React from 'react';
const LABEL_3109 = 'component_3109';
export function Component3109({ value = 3109, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3109, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3109, 'data-value': derived.doubled }, children);
}
export default Component3109;
