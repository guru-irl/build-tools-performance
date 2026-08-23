import React from 'react';
const LABEL_25491 = 'component_25491';
export function Component25491({ value = 25491, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25491, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25491, 'data-value': derived.doubled }, children);
}
export default Component25491;
