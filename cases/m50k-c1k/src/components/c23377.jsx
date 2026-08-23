import React from 'react';
const LABEL_23377 = 'component_23377';
export function Component23377({ value = 23377, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23377, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23377, 'data-value': derived.doubled }, children);
}
export default Component23377;
