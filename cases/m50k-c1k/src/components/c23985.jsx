import React from 'react';
const LABEL_23985 = 'component_23985';
export function Component23985({ value = 23985, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23985, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23985, 'data-value': derived.doubled }, children);
}
export default Component23985;
