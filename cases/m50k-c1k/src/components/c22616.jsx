import React from 'react';
const LABEL_22616 = 'component_22616';
export function Component22616({ value = 22616, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22616, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22616, 'data-value': derived.doubled }, children);
}
export default Component22616;
