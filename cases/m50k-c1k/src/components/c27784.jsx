import React from 'react';
const LABEL_27784 = 'component_27784';
export function Component27784({ value = 27784, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27784, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27784, 'data-value': derived.doubled }, children);
}
export default Component27784;
