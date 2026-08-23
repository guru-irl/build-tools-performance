import React from 'react';
const LABEL_2472 = 'component_2472';
export function Component2472({ value = 2472, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2472, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2472, 'data-value': derived.doubled }, children);
}
export default Component2472;
