import React from 'react';
const LABEL_9707 = 'component_9707';
export function Component9707({ value = 9707, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9707, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9707, 'data-value': derived.doubled }, children);
}
export default Component9707;
