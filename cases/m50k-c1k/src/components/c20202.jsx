import React from 'react';
const LABEL_20202 = 'component_20202';
export function Component20202({ value = 20202, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20202, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20202, 'data-value': derived.doubled }, children);
}
export default Component20202;
