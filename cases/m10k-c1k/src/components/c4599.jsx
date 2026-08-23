import React from 'react';
const LABEL_4599 = 'component_4599';
export function Component4599({ value = 4599, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4599, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4599, 'data-value': derived.doubled }, children);
}
export default Component4599;
