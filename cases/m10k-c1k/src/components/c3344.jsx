import React from 'react';
const LABEL_3344 = 'component_3344';
export function Component3344({ value = 3344, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3344, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3344, 'data-value': derived.doubled }, children);
}
export default Component3344;
