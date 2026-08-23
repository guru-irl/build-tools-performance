import React from 'react';
const LABEL_23524 = 'component_23524';
export function Component23524({ value = 23524, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23524, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23524, 'data-value': derived.doubled }, children);
}
export default Component23524;
