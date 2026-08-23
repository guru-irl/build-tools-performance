import React from 'react';
const LABEL_28119 = 'component_28119';
export function Component28119({ value = 28119, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28119, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28119, 'data-value': derived.doubled }, children);
}
export default Component28119;
