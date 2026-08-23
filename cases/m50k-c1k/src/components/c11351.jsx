import React from 'react';
const LABEL_11351 = 'component_11351';
export function Component11351({ value = 11351, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11351, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11351, 'data-value': derived.doubled }, children);
}
export default Component11351;
