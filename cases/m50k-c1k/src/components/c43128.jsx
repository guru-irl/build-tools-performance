import React from 'react';
const LABEL_43128 = 'component_43128';
export function Component43128({ value = 43128, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43128, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43128, 'data-value': derived.doubled }, children);
}
export default Component43128;
