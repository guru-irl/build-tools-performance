import React from 'react';
const LABEL_10587 = 'component_10587';
export function Component10587({ value = 10587, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10587, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10587, 'data-value': derived.doubled }, children);
}
export default Component10587;
