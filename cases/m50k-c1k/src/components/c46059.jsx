import React from 'react';
const LABEL_46059 = 'component_46059';
export function Component46059({ value = 46059, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46059, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46059, 'data-value': derived.doubled }, children);
}
export default Component46059;
