import React from 'react';
const LABEL_26039 = 'component_26039';
export function Component26039({ value = 26039, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26039, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26039, 'data-value': derived.doubled }, children);
}
export default Component26039;
