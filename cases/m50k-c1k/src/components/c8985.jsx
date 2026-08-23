import React from 'react';
const LABEL_8985 = 'component_8985';
export function Component8985({ value = 8985, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8985, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8985, 'data-value': derived.doubled }, children);
}
export default Component8985;
