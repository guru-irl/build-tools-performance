import React from 'react';
const LABEL_20067 = 'component_20067';
export function Component20067({ value = 20067, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20067, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20067, 'data-value': derived.doubled }, children);
}
export default Component20067;
