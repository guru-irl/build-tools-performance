import React from 'react';
const LABEL_1564 = 'component_1564';
export function Component1564({ value = 1564, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1564, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1564, 'data-value': derived.doubled }, children);
}
export default Component1564;
