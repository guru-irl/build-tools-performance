import React from 'react';
const LABEL_3587 = 'component_3587';
export function Component3587({ value = 3587, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3587, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3587, 'data-value': derived.doubled }, children);
}
export default Component3587;
