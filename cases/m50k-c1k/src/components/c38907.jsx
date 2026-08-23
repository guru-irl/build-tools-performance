import React from 'react';
const LABEL_38907 = 'component_38907';
export function Component38907({ value = 38907, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38907, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38907, 'data-value': derived.doubled }, children);
}
export default Component38907;
