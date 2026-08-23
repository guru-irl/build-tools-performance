import React from 'react';
const LABEL_46053 = 'component_46053';
export function Component46053({ value = 46053, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46053, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46053, 'data-value': derived.doubled }, children);
}
export default Component46053;
