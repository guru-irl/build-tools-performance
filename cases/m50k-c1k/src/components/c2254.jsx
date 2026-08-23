import React from 'react';
const LABEL_2254 = 'component_2254';
export function Component2254({ value = 2254, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2254, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2254, 'data-value': derived.doubled }, children);
}
export default Component2254;
