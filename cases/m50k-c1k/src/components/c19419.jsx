import React from 'react';
const LABEL_19419 = 'component_19419';
export function Component19419({ value = 19419, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19419, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19419, 'data-value': derived.doubled }, children);
}
export default Component19419;
