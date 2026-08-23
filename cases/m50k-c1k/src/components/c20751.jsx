import React from 'react';
const LABEL_20751 = 'component_20751';
export function Component20751({ value = 20751, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20751, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20751, 'data-value': derived.doubled }, children);
}
export default Component20751;
