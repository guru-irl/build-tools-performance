import React from 'react';
const LABEL_36907 = 'component_36907';
export function Component36907({ value = 36907, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36907, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36907, 'data-value': derived.doubled }, children);
}
export default Component36907;
