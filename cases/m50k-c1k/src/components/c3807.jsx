import React from 'react';
const LABEL_3807 = 'component_3807';
export function Component3807({ value = 3807, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3807, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3807, 'data-value': derived.doubled }, children);
}
export default Component3807;
