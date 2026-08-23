import React from 'react';
const LABEL_37985 = 'component_37985';
export function Component37985({ value = 37985, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37985, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37985, 'data-value': derived.doubled }, children);
}
export default Component37985;
