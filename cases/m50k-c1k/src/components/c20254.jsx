import React from 'react';
const LABEL_20254 = 'component_20254';
export function Component20254({ value = 20254, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20254, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20254, 'data-value': derived.doubled }, children);
}
export default Component20254;
