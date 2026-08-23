import React from 'react';
const LABEL_12157 = 'component_12157';
export function Component12157({ value = 12157, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12157, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12157, 'data-value': derived.doubled }, children);
}
export default Component12157;
