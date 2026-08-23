import React from 'react';
const LABEL_5780 = 'component_5780';
export function Component5780({ value = 5780, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5780, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5780, 'data-value': derived.doubled }, children);
}
export default Component5780;
