import React from 'react';
const LABEL_19784 = 'component_19784';
export function Component19784({ value = 19784, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19784, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19784, 'data-value': derived.doubled }, children);
}
export default Component19784;
