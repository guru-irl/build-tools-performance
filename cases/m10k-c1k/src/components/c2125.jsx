import React from 'react';
const LABEL_2125 = 'component_2125';
export function Component2125({ value = 2125, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2125, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2125, 'data-value': derived.doubled }, children);
}
export default Component2125;
