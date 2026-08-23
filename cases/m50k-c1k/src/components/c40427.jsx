import React from 'react';
const LABEL_40427 = 'component_40427';
export function Component40427({ value = 40427, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40427, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40427, 'data-value': derived.doubled }, children);
}
export default Component40427;
