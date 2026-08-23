import React from 'react';
const LABEL_39307 = 'component_39307';
export function Component39307({ value = 39307, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39307, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39307, 'data-value': derived.doubled }, children);
}
export default Component39307;
