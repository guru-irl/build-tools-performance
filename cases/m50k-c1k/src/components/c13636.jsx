import React from 'react';
const LABEL_13636 = 'component_13636';
export function Component13636({ value = 13636, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13636, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13636, 'data-value': derived.doubled }, children);
}
export default Component13636;
