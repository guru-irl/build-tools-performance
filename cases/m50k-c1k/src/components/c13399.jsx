import React from 'react';
const LABEL_13399 = 'component_13399';
export function Component13399({ value = 13399, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13399, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13399, 'data-value': derived.doubled }, children);
}
export default Component13399;
