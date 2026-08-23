import React from 'react';
const LABEL_13499 = 'component_13499';
export function Component13499({ value = 13499, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13499, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13499, 'data-value': derived.doubled }, children);
}
export default Component13499;
