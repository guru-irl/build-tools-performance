import React from 'react';
const LABEL_46558 = 'component_46558';
export function Component46558({ value = 46558, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46558, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46558, 'data-value': derived.doubled }, children);
}
export default Component46558;
