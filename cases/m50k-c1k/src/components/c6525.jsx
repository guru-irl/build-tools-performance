import React from 'react';
const LABEL_6525 = 'component_6525';
export function Component6525({ value = 6525, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6525, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6525, 'data-value': derived.doubled }, children);
}
export default Component6525;
