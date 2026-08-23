import React from 'react';
const LABEL_6655 = 'component_6655';
export function Component6655({ value = 6655, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6655, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6655, 'data-value': derived.doubled }, children);
}
export default Component6655;
