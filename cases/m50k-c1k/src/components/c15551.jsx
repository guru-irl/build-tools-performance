import React from 'react';
const LABEL_15551 = 'component_15551';
export function Component15551({ value = 15551, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15551, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15551, 'data-value': derived.doubled }, children);
}
export default Component15551;
