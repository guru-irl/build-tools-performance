import React from 'react';
const LABEL_2691 = 'component_2691';
export function Component2691({ value = 2691, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2691, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2691, 'data-value': derived.doubled }, children);
}
export default Component2691;
