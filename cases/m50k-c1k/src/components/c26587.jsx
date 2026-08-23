import React from 'react';
const LABEL_26587 = 'component_26587';
export function Component26587({ value = 26587, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26587, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26587, 'data-value': derived.doubled }, children);
}
export default Component26587;
