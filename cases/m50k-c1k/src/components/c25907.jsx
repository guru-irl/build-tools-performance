import React from 'react';
const LABEL_25907 = 'component_25907';
export function Component25907({ value = 25907, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25907, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25907, 'data-value': derived.doubled }, children);
}
export default Component25907;
