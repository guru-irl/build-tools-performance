import React from 'react';
const LABEL_23894 = 'component_23894';
export function Component23894({ value = 23894, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23894, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23894, 'data-value': derived.doubled }, children);
}
export default Component23894;
