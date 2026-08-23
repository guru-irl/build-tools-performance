import React from 'react';
const LABEL_25985 = 'component_25985';
export function Component25985({ value = 25985, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25985, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25985, 'data-value': derived.doubled }, children);
}
export default Component25985;
