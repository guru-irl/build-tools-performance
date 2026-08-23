import React from 'react';
const LABEL_21870 = 'component_21870';
export function Component21870({ value = 21870, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21870, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21870, 'data-value': derived.doubled }, children);
}
export default Component21870;
