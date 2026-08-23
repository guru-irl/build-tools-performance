import React from 'react';
const LABEL_3735 = 'component_3735';
export function Component3735({ value = 3735, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3735, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3735, 'data-value': derived.doubled }, children);
}
export default Component3735;
