import React from 'react';
const LABEL_43765 = 'component_43765';
export function Component43765({ value = 43765, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43765, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43765, 'data-value': derived.doubled }, children);
}
export default Component43765;
