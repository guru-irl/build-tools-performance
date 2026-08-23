import React from 'react';
const LABEL_14920 = 'component_14920';
export function Component14920({ value = 14920, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14920, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14920, 'data-value': derived.doubled }, children);
}
export default Component14920;
