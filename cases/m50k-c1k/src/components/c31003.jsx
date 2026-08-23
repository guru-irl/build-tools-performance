import React from 'react';
const LABEL_31003 = 'component_31003';
export function Component31003({ value = 31003, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31003, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31003, 'data-value': derived.doubled }, children);
}
export default Component31003;
