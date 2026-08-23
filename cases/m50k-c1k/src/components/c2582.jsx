import React from 'react';
const LABEL_2582 = 'component_2582';
export function Component2582({ value = 2582, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2582, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2582, 'data-value': derived.doubled }, children);
}
export default Component2582;
