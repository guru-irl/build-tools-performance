import React from 'react';
const LABEL_24542 = 'component_24542';
export function Component24542({ value = 24542, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24542, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24542, 'data-value': derived.doubled }, children);
}
export default Component24542;
