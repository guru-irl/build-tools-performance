import React from 'react';
const LABEL_10616 = 'component_10616';
export function Component10616({ value = 10616, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10616, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10616, 'data-value': derived.doubled }, children);
}
export default Component10616;
