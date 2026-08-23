import React from 'react';
const LABEL_11823 = 'component_11823';
export function Component11823({ value = 11823, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11823, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11823, 'data-value': derived.doubled }, children);
}
export default Component11823;
