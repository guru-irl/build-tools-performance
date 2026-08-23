import React from 'react';
const LABEL_12985 = 'component_12985';
export function Component12985({ value = 12985, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12985, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12985, 'data-value': derived.doubled }, children);
}
export default Component12985;
