import React from 'react';
const LABEL_25870 = 'component_25870';
export function Component25870({ value = 25870, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25870, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25870, 'data-value': derived.doubled }, children);
}
export default Component25870;
