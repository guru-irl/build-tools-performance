import React from 'react';
const LABEL_24791 = 'component_24791';
export function Component24791({ value = 24791, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24791, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24791, 'data-value': derived.doubled }, children);
}
export default Component24791;
