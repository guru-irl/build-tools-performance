import React from 'react';
const LABEL_45342 = 'component_45342';
export function Component45342({ value = 45342, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45342, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45342, 'data-value': derived.doubled }, children);
}
export default Component45342;
