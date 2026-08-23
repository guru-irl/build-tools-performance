import React from 'react';
const LABEL_28587 = 'component_28587';
export function Component28587({ value = 28587, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28587, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28587, 'data-value': derived.doubled }, children);
}
export default Component28587;
