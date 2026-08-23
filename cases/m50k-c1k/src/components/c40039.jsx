import React from 'react';
const LABEL_40039 = 'component_40039';
export function Component40039({ value = 40039, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40039, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40039, 'data-value': derived.doubled }, children);
}
export default Component40039;
