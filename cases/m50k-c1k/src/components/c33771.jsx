import React from 'react';
const LABEL_33771 = 'component_33771';
export function Component33771({ value = 33771, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33771, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33771, 'data-value': derived.doubled }, children);
}
export default Component33771;
