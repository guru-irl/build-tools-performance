import React from 'react';
const LABEL_2473 = 'component_2473';
export function Component2473({ value = 2473, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2473, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2473, 'data-value': derived.doubled }, children);
}
export default Component2473;
