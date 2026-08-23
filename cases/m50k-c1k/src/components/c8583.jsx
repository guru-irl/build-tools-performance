import React from 'react';
const LABEL_8583 = 'component_8583';
export function Component8583({ value = 8583, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8583, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8583, 'data-value': derived.doubled }, children);
}
export default Component8583;
