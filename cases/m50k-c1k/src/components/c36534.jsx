import React from 'react';
const LABEL_36534 = 'component_36534';
export function Component36534({ value = 36534, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36534, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36534, 'data-value': derived.doubled }, children);
}
export default Component36534;
