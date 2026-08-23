import React from 'react';
const LABEL_13146 = 'component_13146';
export function Component13146({ value = 13146, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13146, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13146, 'data-value': derived.doubled }, children);
}
export default Component13146;
