import React from 'react';
const LABEL_20318 = 'component_20318';
export function Component20318({ value = 20318, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20318, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20318, 'data-value': derived.doubled }, children);
}
export default Component20318;
