import React from 'react';
const LABEL_2176 = 'component_2176';
export function Component2176({ value = 2176, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2176, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2176, 'data-value': derived.doubled }, children);
}
export default Component2176;
