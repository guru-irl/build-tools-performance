import React from 'react';
const LABEL_5053 = 'component_5053';
export function Component5053({ value = 5053, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5053, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5053, 'data-value': derived.doubled }, children);
}
export default Component5053;
