import React from 'react';
const LABEL_3139 = 'component_3139';
export function Component3139({ value = 3139, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3139, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3139, 'data-value': derived.doubled }, children);
}
export default Component3139;
