import React from 'react';
const LABEL_832 = 'component_832';
export function Component832({ value = 832, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_832, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_832, 'data-value': derived.doubled }, children);
}
export default Component832;
