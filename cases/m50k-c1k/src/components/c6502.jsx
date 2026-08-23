import React from 'react';
const LABEL_6502 = 'component_6502';
export function Component6502({ value = 6502, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6502, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6502, 'data-value': derived.doubled }, children);
}
export default Component6502;
