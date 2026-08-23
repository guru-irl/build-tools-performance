import React from 'react';
const LABEL_23775 = 'component_23775';
export function Component23775({ value = 23775, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23775, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23775, 'data-value': derived.doubled }, children);
}
export default Component23775;
