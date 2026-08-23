import React from 'react';
const LABEL_40345 = 'component_40345';
export function Component40345({ value = 40345, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40345, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40345, 'data-value': derived.doubled }, children);
}
export default Component40345;
