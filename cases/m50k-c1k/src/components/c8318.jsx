import React from 'react';
const LABEL_8318 = 'component_8318';
export function Component8318({ value = 8318, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8318, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8318, 'data-value': derived.doubled }, children);
}
export default Component8318;
