import React from 'react';
const LABEL_13039 = 'component_13039';
export function Component13039({ value = 13039, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13039, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13039, 'data-value': derived.doubled }, children);
}
export default Component13039;
