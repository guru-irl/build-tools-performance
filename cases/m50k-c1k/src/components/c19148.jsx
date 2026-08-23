import React from 'react';
const LABEL_19148 = 'component_19148';
export function Component19148({ value = 19148, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19148, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19148, 'data-value': derived.doubled }, children);
}
export default Component19148;
