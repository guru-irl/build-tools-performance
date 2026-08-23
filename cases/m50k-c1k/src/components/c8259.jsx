import React from 'react';
const LABEL_8259 = 'component_8259';
export function Component8259({ value = 8259, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8259, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8259, 'data-value': derived.doubled }, children);
}
export default Component8259;
