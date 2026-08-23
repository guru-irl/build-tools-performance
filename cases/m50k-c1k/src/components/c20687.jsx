import React from 'react';
const LABEL_20687 = 'component_20687';
export function Component20687({ value = 20687, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20687, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20687, 'data-value': derived.doubled }, children);
}
export default Component20687;
