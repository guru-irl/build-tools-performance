import React from 'react';
const LABEL_11875 = 'component_11875';
export function Component11875({ value = 11875, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11875, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11875, 'data-value': derived.doubled }, children);
}
export default Component11875;
