import React from 'react';
const LABEL_21587 = 'component_21587';
export function Component21587({ value = 21587, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21587, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21587, 'data-value': derived.doubled }, children);
}
export default Component21587;
