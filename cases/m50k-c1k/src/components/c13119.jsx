import React from 'react';
const LABEL_13119 = 'component_13119';
export function Component13119({ value = 13119, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13119, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13119, 'data-value': derived.doubled }, children);
}
export default Component13119;
