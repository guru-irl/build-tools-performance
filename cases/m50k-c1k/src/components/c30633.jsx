import React from 'react';
const LABEL_30633 = 'component_30633';
export function Component30633({ value = 30633, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30633, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30633, 'data-value': derived.doubled }, children);
}
export default Component30633;
