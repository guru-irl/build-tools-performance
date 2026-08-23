import React from 'react';
const LABEL_7542 = 'component_7542';
export function Component7542({ value = 7542, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7542, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7542, 'data-value': derived.doubled }, children);
}
export default Component7542;
