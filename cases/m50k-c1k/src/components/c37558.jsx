import React from 'react';
const LABEL_37558 = 'component_37558';
export function Component37558({ value = 37558, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37558, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37558, 'data-value': derived.doubled }, children);
}
export default Component37558;
