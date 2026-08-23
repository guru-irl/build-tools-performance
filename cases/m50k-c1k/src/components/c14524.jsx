import React from 'react';
const LABEL_14524 = 'component_14524';
export function Component14524({ value = 14524, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14524, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14524, 'data-value': derived.doubled }, children);
}
export default Component14524;
