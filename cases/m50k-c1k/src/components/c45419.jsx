import React from 'react';
const LABEL_45419 = 'component_45419';
export function Component45419({ value = 45419, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45419, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45419, 'data-value': derived.doubled }, children);
}
export default Component45419;
