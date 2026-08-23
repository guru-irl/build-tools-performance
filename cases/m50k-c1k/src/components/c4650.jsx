import React from 'react';
const LABEL_4650 = 'component_4650';
export function Component4650({ value = 4650, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4650, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4650, 'data-value': derived.doubled }, children);
}
export default Component4650;
