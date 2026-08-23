import React from 'react';
const LABEL_26273 = 'component_26273';
export function Component26273({ value = 26273, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26273, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26273, 'data-value': derived.doubled }, children);
}
export default Component26273;
