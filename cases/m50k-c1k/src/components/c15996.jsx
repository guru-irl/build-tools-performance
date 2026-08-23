import React from 'react';
const LABEL_15996 = 'component_15996';
export function Component15996({ value = 15996, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15996, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15996, 'data-value': derived.doubled }, children);
}
export default Component15996;
