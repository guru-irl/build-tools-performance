import React from 'react';
const LABEL_5318 = 'component_5318';
export function Component5318({ value = 5318, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5318, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5318, 'data-value': derived.doubled }, children);
}
export default Component5318;
