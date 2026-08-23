import React from 'react';
const LABEL_2780 = 'component_2780';
export function Component2780({ value = 2780, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2780, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2780, 'data-value': derived.doubled }, children);
}
export default Component2780;
