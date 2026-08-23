import React from 'react';
const LABEL_23933 = 'component_23933';
export function Component23933({ value = 23933, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23933, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23933, 'data-value': derived.doubled }, children);
}
export default Component23933;
