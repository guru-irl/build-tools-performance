import React from 'react';
const LABEL_2151 = 'component_2151';
export function Component2151({ value = 2151, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2151, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2151, 'data-value': derived.doubled }, children);
}
export default Component2151;
