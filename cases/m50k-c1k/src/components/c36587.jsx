import React from 'react';
const LABEL_36587 = 'component_36587';
export function Component36587({ value = 36587, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36587, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36587, 'data-value': derived.doubled }, children);
}
export default Component36587;
