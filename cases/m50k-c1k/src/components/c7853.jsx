import React from 'react';
const LABEL_7853 = 'component_7853';
export function Component7853({ value = 7853, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7853, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7853, 'data-value': derived.doubled }, children);
}
export default Component7853;
