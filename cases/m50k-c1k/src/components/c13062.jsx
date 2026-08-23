import React from 'react';
const LABEL_13062 = 'component_13062';
export function Component13062({ value = 13062, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13062, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13062, 'data-value': derived.doubled }, children);
}
export default Component13062;
