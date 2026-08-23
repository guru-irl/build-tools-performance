import React from 'react';
const LABEL_22181 = 'component_22181';
export function Component22181({ value = 22181, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22181, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22181, 'data-value': derived.doubled }, children);
}
export default Component22181;
