import React from 'react';
const LABEL_46587 = 'component_46587';
export function Component46587({ value = 46587, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46587, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46587, 'data-value': derived.doubled }, children);
}
export default Component46587;
