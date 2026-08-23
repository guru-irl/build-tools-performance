import React from 'react';
const LABEL_15351 = 'component_15351';
export function Component15351({ value = 15351, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15351, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15351, 'data-value': derived.doubled }, children);
}
export default Component15351;
