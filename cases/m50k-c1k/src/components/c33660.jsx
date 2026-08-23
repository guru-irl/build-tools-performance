import React from 'react';
const LABEL_33660 = 'component_33660';
export function Component33660({ value = 33660, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33660, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33660, 'data-value': derived.doubled }, children);
}
export default Component33660;
