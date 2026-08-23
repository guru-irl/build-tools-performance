import React from 'react';
const LABEL_36119 = 'component_36119';
export function Component36119({ value = 36119, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36119, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36119, 'data-value': derived.doubled }, children);
}
export default Component36119;
