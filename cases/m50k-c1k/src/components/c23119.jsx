import React from 'react';
const LABEL_23119 = 'component_23119';
export function Component23119({ value = 23119, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23119, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23119, 'data-value': derived.doubled }, children);
}
export default Component23119;
