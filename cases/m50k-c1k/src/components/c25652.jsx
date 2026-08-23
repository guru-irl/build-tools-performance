import React from 'react';
const LABEL_25652 = 'component_25652';
export function Component25652({ value = 25652, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25652, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25652, 'data-value': derived.doubled }, children);
}
export default Component25652;
