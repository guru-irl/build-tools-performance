import React from 'react';
const LABEL_5290 = 'component_5290';
export function Component5290({ value = 5290, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5290, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5290, 'data-value': derived.doubled }, children);
}
export default Component5290;
