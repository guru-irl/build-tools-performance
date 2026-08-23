import React from 'react';
const LABEL_39163 = 'component_39163';
export function Component39163({ value = 39163, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39163, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39163, 'data-value': derived.doubled }, children);
}
export default Component39163;
