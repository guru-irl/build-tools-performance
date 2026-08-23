import React from 'react';
const LABEL_35907 = 'component_35907';
export function Component35907({ value = 35907, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35907, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35907, 'data-value': derived.doubled }, children);
}
export default Component35907;
