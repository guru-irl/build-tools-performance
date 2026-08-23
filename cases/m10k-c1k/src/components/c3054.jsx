import React from 'react';
const LABEL_3054 = 'component_3054';
export function Component3054({ value = 3054, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3054, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3054, 'data-value': derived.doubled }, children);
}
export default Component3054;
