import React from 'react';
const LABEL_13009 = 'component_13009';
export function Component13009({ value = 13009, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13009, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13009, 'data-value': derived.doubled }, children);
}
export default Component13009;
