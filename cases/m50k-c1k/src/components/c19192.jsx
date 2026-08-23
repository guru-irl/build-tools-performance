import React from 'react';
const LABEL_19192 = 'component_19192';
export function Component19192({ value = 19192, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19192, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19192, 'data-value': derived.doubled }, children);
}
export default Component19192;
