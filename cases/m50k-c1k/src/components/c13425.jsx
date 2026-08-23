import React from 'react';
const LABEL_13425 = 'component_13425';
export function Component13425({ value = 13425, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13425, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13425, 'data-value': derived.doubled }, children);
}
export default Component13425;
