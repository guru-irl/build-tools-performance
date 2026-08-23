import React from 'react';
const LABEL_13822 = 'component_13822';
export function Component13822({ value = 13822, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13822, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13822, 'data-value': derived.doubled }, children);
}
export default Component13822;
