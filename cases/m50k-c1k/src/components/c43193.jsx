import React from 'react';
const LABEL_43193 = 'component_43193';
export function Component43193({ value = 43193, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43193, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43193, 'data-value': derived.doubled }, children);
}
export default Component43193;
