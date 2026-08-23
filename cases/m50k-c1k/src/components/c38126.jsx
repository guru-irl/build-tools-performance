import React from 'react';
const LABEL_38126 = 'component_38126';
export function Component38126({ value = 38126, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38126, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38126, 'data-value': derived.doubled }, children);
}
export default Component38126;
