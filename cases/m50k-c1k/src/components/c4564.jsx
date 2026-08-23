import React from 'react';
const LABEL_4564 = 'component_4564';
export function Component4564({ value = 4564, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4564, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4564, 'data-value': derived.doubled }, children);
}
export default Component4564;
