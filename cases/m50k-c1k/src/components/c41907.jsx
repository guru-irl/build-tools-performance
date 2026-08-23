import React from 'react';
const LABEL_41907 = 'component_41907';
export function Component41907({ value = 41907, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41907, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41907, 'data-value': derived.doubled }, children);
}
export default Component41907;
