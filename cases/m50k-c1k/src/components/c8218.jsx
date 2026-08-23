import React from 'react';
const LABEL_8218 = 'component_8218';
export function Component8218({ value = 8218, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8218, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8218, 'data-value': derived.doubled }, children);
}
export default Component8218;
