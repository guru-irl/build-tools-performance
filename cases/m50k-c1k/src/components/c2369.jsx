import React from 'react';
const LABEL_2369 = 'component_2369';
export function Component2369({ value = 2369, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2369, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2369, 'data-value': derived.doubled }, children);
}
export default Component2369;
