import React from 'react';
const LABEL_24668 = 'component_24668';
export function Component24668({ value = 24668, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24668, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24668, 'data-value': derived.doubled }, children);
}
export default Component24668;
