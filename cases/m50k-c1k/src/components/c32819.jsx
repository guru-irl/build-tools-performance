import React from 'react';
const LABEL_32819 = 'component_32819';
export function Component32819({ value = 32819, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32819, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32819, 'data-value': derived.doubled }, children);
}
export default Component32819;
