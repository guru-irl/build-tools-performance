import React from 'react';
const LABEL_23042 = 'component_23042';
export function Component23042({ value = 23042, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23042, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23042, 'data-value': derived.doubled }, children);
}
export default Component23042;
