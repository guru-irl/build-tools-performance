import React from 'react';
const LABEL_26403 = 'component_26403';
export function Component26403({ value = 26403, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26403, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26403, 'data-value': derived.doubled }, children);
}
export default Component26403;
