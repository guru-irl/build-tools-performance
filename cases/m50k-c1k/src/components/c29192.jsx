import React from 'react';
const LABEL_29192 = 'component_29192';
export function Component29192({ value = 29192, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29192, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29192, 'data-value': derived.doubled }, children);
}
export default Component29192;
