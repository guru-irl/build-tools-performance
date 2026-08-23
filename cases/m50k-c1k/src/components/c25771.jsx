import React from 'react';
const LABEL_25771 = 'component_25771';
export function Component25771({ value = 25771, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25771, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25771, 'data-value': derived.doubled }, children);
}
export default Component25771;
