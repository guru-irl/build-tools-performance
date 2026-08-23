import React from 'react';
const LABEL_2489 = 'component_2489';
export function Component2489({ value = 2489, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2489, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2489, 'data-value': derived.doubled }, children);
}
export default Component2489;
