import React from 'react';
const LABEL_23486 = 'component_23486';
export function Component23486({ value = 23486, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23486, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23486, 'data-value': derived.doubled }, children);
}
export default Component23486;
