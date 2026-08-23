import React from 'react';
const LABEL_6587 = 'component_6587';
export function Component6587({ value = 6587, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6587, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6587, 'data-value': derived.doubled }, children);
}
export default Component6587;
