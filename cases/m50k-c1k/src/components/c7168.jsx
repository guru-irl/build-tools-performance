import React from 'react';
const LABEL_7168 = 'component_7168';
export function Component7168({ value = 7168, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7168, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7168, 'data-value': derived.doubled }, children);
}
export default Component7168;
