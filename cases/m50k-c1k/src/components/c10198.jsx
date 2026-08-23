import React from 'react';
const LABEL_10198 = 'component_10198';
export function Component10198({ value = 10198, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10198, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10198, 'data-value': derived.doubled }, children);
}
export default Component10198;
