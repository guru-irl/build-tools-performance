import React from 'react';
const LABEL_35875 = 'component_35875';
export function Component35875({ value = 35875, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35875, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35875, 'data-value': derived.doubled }, children);
}
export default Component35875;
