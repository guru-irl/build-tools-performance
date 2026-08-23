import React from 'react';
const LABEL_22961 = 'component_22961';
export function Component22961({ value = 22961, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22961, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22961, 'data-value': derived.doubled }, children);
}
export default Component22961;
