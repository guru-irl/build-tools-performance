import React from 'react';
const LABEL_25885 = 'component_25885';
export function Component25885({ value = 25885, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25885, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25885, 'data-value': derived.doubled }, children);
}
export default Component25885;
