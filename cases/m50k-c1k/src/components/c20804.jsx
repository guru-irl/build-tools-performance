import React from 'react';
const LABEL_20804 = 'component_20804';
export function Component20804({ value = 20804, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20804, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20804, 'data-value': derived.doubled }, children);
}
export default Component20804;
