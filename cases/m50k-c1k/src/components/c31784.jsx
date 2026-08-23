import React from 'react';
const LABEL_31784 = 'component_31784';
export function Component31784({ value = 31784, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31784, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31784, 'data-value': derived.doubled }, children);
}
export default Component31784;
