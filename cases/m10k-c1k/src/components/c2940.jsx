import React from 'react';
const LABEL_2940 = 'component_2940';
export function Component2940({ value = 2940, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2940, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2940, 'data-value': derived.doubled }, children);
}
export default Component2940;
