import React from 'react';
const LABEL_46528 = 'component_46528';
export function Component46528({ value = 46528, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46528, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46528, 'data-value': derived.doubled }, children);
}
export default Component46528;
