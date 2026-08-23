import React from 'react';
const LABEL_2384 = 'component_2384';
export function Component2384({ value = 2384, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2384, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2384, 'data-value': derived.doubled }, children);
}
export default Component2384;
