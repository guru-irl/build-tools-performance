import React from 'react';
const LABEL_43808 = 'component_43808';
export function Component43808({ value = 43808, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43808, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43808, 'data-value': derived.doubled }, children);
}
export default Component43808;
