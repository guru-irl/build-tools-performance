import React from 'react';
const LABEL_13326 = 'component_13326';
export function Component13326({ value = 13326, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13326, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13326, 'data-value': derived.doubled }, children);
}
export default Component13326;
