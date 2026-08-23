import React from 'react';
const LABEL_43551 = 'component_43551';
export function Component43551({ value = 43551, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43551, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43551, 'data-value': derived.doubled }, children);
}
export default Component43551;
