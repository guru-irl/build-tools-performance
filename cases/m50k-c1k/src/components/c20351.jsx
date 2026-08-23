import React from 'react';
const LABEL_20351 = 'component_20351';
export function Component20351({ value = 20351, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20351, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20351, 'data-value': derived.doubled }, children);
}
export default Component20351;
