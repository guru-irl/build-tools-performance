import React from 'react';
const LABEL_22474 = 'component_22474';
export function Component22474({ value = 22474, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22474, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22474, 'data-value': derived.doubled }, children);
}
export default Component22474;
