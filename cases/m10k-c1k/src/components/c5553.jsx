import React from 'react';
const LABEL_5553 = 'component_5553';
export function Component5553({ value = 5553, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5553, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5553, 'data-value': derived.doubled }, children);
}
export default Component5553;
