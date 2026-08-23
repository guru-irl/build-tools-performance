import React from 'react';
const LABEL_3524 = 'component_3524';
export function Component3524({ value = 3524, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3524, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3524, 'data-value': derived.doubled }, children);
}
export default Component3524;
