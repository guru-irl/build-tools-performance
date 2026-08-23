import React from 'react';
const LABEL_35616 = 'component_35616';
export function Component35616({ value = 35616, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35616, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35616, 'data-value': derived.doubled }, children);
}
export default Component35616;
