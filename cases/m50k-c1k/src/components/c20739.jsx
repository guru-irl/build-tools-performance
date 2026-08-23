import React from 'react';
const LABEL_20739 = 'component_20739';
export function Component20739({ value = 20739, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20739, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20739, 'data-value': derived.doubled }, children);
}
export default Component20739;
