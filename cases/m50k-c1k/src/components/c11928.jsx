import React from 'react';
const LABEL_11928 = 'component_11928';
export function Component11928({ value = 11928, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11928, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11928, 'data-value': derived.doubled }, children);
}
export default Component11928;
