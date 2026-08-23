import React from 'react';
const LABEL_40419 = 'component_40419';
export function Component40419({ value = 40419, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40419, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40419, 'data-value': derived.doubled }, children);
}
export default Component40419;
