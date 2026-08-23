import React from 'react';
const LABEL_819 = 'component_819';
export function Component819({ value = 819, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_819, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_819, 'data-value': derived.doubled }, children);
}
export default Component819;
