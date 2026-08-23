import React from 'react';
const LABEL_19928 = 'component_19928';
export function Component19928({ value = 19928, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19928, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19928, 'data-value': derived.doubled }, children);
}
export default Component19928;
