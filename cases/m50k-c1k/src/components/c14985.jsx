import React from 'react';
const LABEL_14985 = 'component_14985';
export function Component14985({ value = 14985, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14985, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14985, 'data-value': derived.doubled }, children);
}
export default Component14985;
