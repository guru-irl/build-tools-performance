import React from 'react';
const LABEL_45759 = 'component_45759';
export function Component45759({ value = 45759, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45759, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45759, 'data-value': derived.doubled }, children);
}
export default Component45759;
