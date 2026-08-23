import React from 'react';
const LABEL_25718 = 'component_25718';
export function Component25718({ value = 25718, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25718, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25718, 'data-value': derived.doubled }, children);
}
export default Component25718;
