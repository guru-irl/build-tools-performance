import React from 'react';
const LABEL_32851 = 'component_32851';
export function Component32851({ value = 32851, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32851, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32851, 'data-value': derived.doubled }, children);
}
export default Component32851;
