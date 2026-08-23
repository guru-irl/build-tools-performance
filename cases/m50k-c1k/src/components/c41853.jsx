import React from 'react';
const LABEL_41853 = 'component_41853';
export function Component41853({ value = 41853, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41853, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41853, 'data-value': derived.doubled }, children);
}
export default Component41853;
