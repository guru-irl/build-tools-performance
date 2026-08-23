import React from 'react';
const LABEL_273 = 'component_273';
export function Component273({ value = 273, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_273, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_273, 'data-value': derived.doubled }, children);
}
export default Component273;
