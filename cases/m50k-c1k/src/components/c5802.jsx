import React from 'react';
const LABEL_5802 = 'component_5802';
export function Component5802({ value = 5802, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5802, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5802, 'data-value': derived.doubled }, children);
}
export default Component5802;
