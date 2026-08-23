import React from 'react';
const LABEL_29875 = 'component_29875';
export function Component29875({ value = 29875, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29875, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29875, 'data-value': derived.doubled }, children);
}
export default Component29875;
