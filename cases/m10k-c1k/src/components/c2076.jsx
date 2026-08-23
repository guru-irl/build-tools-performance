import React from 'react';
const LABEL_2076 = 'component_2076';
export function Component2076({ value = 2076, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2076, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2076, 'data-value': derived.doubled }, children);
}
export default Component2076;
