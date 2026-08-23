import React from 'react';
const LABEL_42587 = 'component_42587';
export function Component42587({ value = 42587, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42587, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42587, 'data-value': derived.doubled }, children);
}
export default Component42587;
