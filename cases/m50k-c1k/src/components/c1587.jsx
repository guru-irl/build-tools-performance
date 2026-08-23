import React from 'react';
const LABEL_1587 = 'component_1587';
export function Component1587({ value = 1587, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1587, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1587, 'data-value': derived.doubled }, children);
}
export default Component1587;
