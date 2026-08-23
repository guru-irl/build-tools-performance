import React from 'react';
const LABEL_2584 = 'component_2584';
export function Component2584({ value = 2584, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2584, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2584, 'data-value': derived.doubled }, children);
}
export default Component2584;
