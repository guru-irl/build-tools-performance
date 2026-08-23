import React from 'react';
const LABEL_21872 = 'component_21872';
export function Component21872({ value = 21872, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21872, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21872, 'data-value': derived.doubled }, children);
}
export default Component21872;
