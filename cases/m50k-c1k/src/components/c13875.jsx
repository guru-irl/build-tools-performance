import React from 'react';
const LABEL_13875 = 'component_13875';
export function Component13875({ value = 13875, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13875, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13875, 'data-value': derived.doubled }, children);
}
export default Component13875;
