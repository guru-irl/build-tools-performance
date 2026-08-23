import React from 'react';
const LABEL_14587 = 'component_14587';
export function Component14587({ value = 14587, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14587, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14587, 'data-value': derived.doubled }, children);
}
export default Component14587;
