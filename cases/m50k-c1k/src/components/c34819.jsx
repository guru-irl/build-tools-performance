import React from 'react';
const LABEL_34819 = 'component_34819';
export function Component34819({ value = 34819, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34819, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34819, 'data-value': derived.doubled }, children);
}
export default Component34819;
