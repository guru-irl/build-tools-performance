import React from 'react';
const LABEL_5162 = 'component_5162';
export function Component5162({ value = 5162, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5162, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5162, 'data-value': derived.doubled }, children);
}
export default Component5162;
