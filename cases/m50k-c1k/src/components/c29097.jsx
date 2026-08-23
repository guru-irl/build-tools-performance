import React from 'react';
const LABEL_29097 = 'component_29097';
export function Component29097({ value = 29097, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29097, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29097, 'data-value': derived.doubled }, children);
}
export default Component29097;
