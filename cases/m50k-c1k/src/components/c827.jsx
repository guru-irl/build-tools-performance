import React from 'react';
const LABEL_827 = 'component_827';
export function Component827({ value = 827, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_827, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_827, 'data-value': derived.doubled }, children);
}
export default Component827;
