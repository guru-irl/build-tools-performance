import React from 'react';
const LABEL_35189 = 'component_35189';
export function Component35189({ value = 35189, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35189, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35189, 'data-value': derived.doubled }, children);
}
export default Component35189;
