import React from 'react';
const LABEL_19819 = 'component_19819';
export function Component19819({ value = 19819, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19819, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19819, 'data-value': derived.doubled }, children);
}
export default Component19819;
