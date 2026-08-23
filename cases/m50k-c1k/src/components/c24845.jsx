import React from 'react';
const LABEL_24845 = 'component_24845';
export function Component24845({ value = 24845, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24845, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24845, 'data-value': derived.doubled }, children);
}
export default Component24845;
