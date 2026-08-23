import React from 'react';
const LABEL_22168 = 'component_22168';
export function Component22168({ value = 22168, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22168, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22168, 'data-value': derived.doubled }, children);
}
export default Component22168;
