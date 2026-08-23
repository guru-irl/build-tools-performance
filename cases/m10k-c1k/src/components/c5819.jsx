import React from 'react';
const LABEL_5819 = 'component_5819';
export function Component5819({ value = 5819, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5819, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5819, 'data-value': derived.doubled }, children);
}
export default Component5819;
