import React from 'react';
const LABEL_46823 = 'component_46823';
export function Component46823({ value = 46823, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46823, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46823, 'data-value': derived.doubled }, children);
}
export default Component46823;
