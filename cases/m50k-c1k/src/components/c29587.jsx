import React from 'react';
const LABEL_29587 = 'component_29587';
export function Component29587({ value = 29587, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29587, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29587, 'data-value': derived.doubled }, children);
}
export default Component29587;
