import React from 'react';
const LABEL_28108 = 'component_28108';
export function Component28108({ value = 28108, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28108, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28108, 'data-value': derived.doubled }, children);
}
export default Component28108;
