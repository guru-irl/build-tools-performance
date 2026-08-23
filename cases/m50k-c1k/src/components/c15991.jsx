import React from 'react';
const LABEL_15991 = 'component_15991';
export function Component15991({ value = 15991, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15991, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15991, 'data-value': derived.doubled }, children);
}
export default Component15991;
