import React from 'react';
const LABEL_22524 = 'component_22524';
export function Component22524({ value = 22524, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22524, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22524, 'data-value': derived.doubled }, children);
}
export default Component22524;
