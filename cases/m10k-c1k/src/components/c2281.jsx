import React from 'react';
const LABEL_2281 = 'component_2281';
export function Component2281({ value = 2281, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2281, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2281, 'data-value': derived.doubled }, children);
}
export default Component2281;
