import React from 'react';
const LABEL_24653 = 'component_24653';
export function Component24653({ value = 24653, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24653, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24653, 'data-value': derived.doubled }, children);
}
export default Component24653;
