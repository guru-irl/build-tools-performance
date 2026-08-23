import React from 'react';
const LABEL_11907 = 'component_11907';
export function Component11907({ value = 11907, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11907, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11907, 'data-value': derived.doubled }, children);
}
export default Component11907;
