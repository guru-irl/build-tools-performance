import React from 'react';
const LABEL_32875 = 'component_32875';
export function Component32875({ value = 32875, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32875, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32875, 'data-value': derived.doubled }, children);
}
export default Component32875;
