import React from 'react';
const LABEL_35097 = 'component_35097';
export function Component35097({ value = 35097, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35097, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35097, 'data-value': derived.doubled }, children);
}
export default Component35097;
