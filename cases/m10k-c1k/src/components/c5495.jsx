import React from 'react';
const LABEL_5495 = 'component_5495';
export function Component5495({ value = 5495, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5495, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5495, 'data-value': derived.doubled }, children);
}
export default Component5495;
