import React from 'react';
const LABEL_32119 = 'component_32119';
export function Component32119({ value = 32119, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32119, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32119, 'data-value': derived.doubled }, children);
}
export default Component32119;
