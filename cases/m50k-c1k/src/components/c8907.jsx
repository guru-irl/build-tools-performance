import React from 'react';
const LABEL_8907 = 'component_8907';
export function Component8907({ value = 8907, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8907, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8907, 'data-value': derived.doubled }, children);
}
export default Component8907;
