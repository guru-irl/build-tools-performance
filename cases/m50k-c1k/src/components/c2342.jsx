import React from 'react';
const LABEL_2342 = 'component_2342';
export function Component2342({ value = 2342, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2342, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2342, 'data-value': derived.doubled }, children);
}
export default Component2342;
