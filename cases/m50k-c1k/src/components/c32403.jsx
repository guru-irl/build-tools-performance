import React from 'react';
const LABEL_32403 = 'component_32403';
export function Component32403({ value = 32403, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32403, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32403, 'data-value': derived.doubled }, children);
}
export default Component32403;
