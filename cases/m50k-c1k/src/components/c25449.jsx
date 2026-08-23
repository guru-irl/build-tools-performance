import React from 'react';
const LABEL_25449 = 'component_25449';
export function Component25449({ value = 25449, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25449, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25449, 'data-value': derived.doubled }, children);
}
export default Component25449;
