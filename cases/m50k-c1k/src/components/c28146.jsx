import React from 'react';
const LABEL_28146 = 'component_28146';
export function Component28146({ value = 28146, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28146, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28146, 'data-value': derived.doubled }, children);
}
export default Component28146;
