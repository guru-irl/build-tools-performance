import React from 'react';
const LABEL_16780 = 'component_16780';
export function Component16780({ value = 16780, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16780, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16780, 'data-value': derived.doubled }, children);
}
export default Component16780;
