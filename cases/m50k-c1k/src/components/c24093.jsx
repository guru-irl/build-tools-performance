import React from 'react';
const LABEL_24093 = 'component_24093';
export function Component24093({ value = 24093, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24093, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24093, 'data-value': derived.doubled }, children);
}
export default Component24093;
