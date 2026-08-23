import React from 'react';
const LABEL_32791 = 'component_32791';
export function Component32791({ value = 32791, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32791, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32791, 'data-value': derived.doubled }, children);
}
export default Component32791;
