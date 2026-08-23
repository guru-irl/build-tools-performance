import React from 'react';
const LABEL_20338 = 'component_20338';
export function Component20338({ value = 20338, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20338, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20338, 'data-value': derived.doubled }, children);
}
export default Component20338;
