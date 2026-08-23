import React from 'react';
const LABEL_46616 = 'component_46616';
export function Component46616({ value = 46616, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46616, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46616, 'data-value': derived.doubled }, children);
}
export default Component46616;
