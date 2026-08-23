import React from 'react';
const LABEL_33616 = 'component_33616';
export function Component33616({ value = 33616, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33616, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33616, 'data-value': derived.doubled }, children);
}
export default Component33616;
