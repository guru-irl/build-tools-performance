import React from 'react';
const LABEL_26907 = 'component_26907';
export function Component26907({ value = 26907, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26907, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26907, 'data-value': derived.doubled }, children);
}
export default Component26907;
