import React from 'react';
const LABEL_7907 = 'component_7907';
export function Component7907({ value = 7907, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7907, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7907, 'data-value': derived.doubled }, children);
}
export default Component7907;
