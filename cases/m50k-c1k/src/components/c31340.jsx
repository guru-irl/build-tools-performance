import React from 'react';
const LABEL_31340 = 'component_31340';
export function Component31340({ value = 31340, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31340, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31340, 'data-value': derived.doubled }, children);
}
export default Component31340;
