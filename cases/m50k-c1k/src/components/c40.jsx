import React from 'react';
const LABEL_40 = 'component_40';
export function Component40({ value = 40, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40, 'data-value': derived.doubled }, children);
}
export default Component40;
