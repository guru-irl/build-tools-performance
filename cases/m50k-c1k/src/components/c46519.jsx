import React from 'react';
const LABEL_46519 = 'component_46519';
export function Component46519({ value = 46519, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46519, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46519, 'data-value': derived.doubled }, children);
}
export default Component46519;
