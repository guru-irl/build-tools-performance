import React from 'react';
const LABEL_2500 = 'component_2500';
export function Component2500({ value = 2500, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2500, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2500, 'data-value': derived.doubled }, children);
}
export default Component2500;
