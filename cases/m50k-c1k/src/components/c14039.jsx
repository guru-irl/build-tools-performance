import React from 'react';
const LABEL_14039 = 'component_14039';
export function Component14039({ value = 14039, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14039, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14039, 'data-value': derived.doubled }, children);
}
export default Component14039;
