import React from 'react';
const LABEL_5875 = 'component_5875';
export function Component5875({ value = 5875, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5875, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5875, 'data-value': derived.doubled }, children);
}
export default Component5875;
