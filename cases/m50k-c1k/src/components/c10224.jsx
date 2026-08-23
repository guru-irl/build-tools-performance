import React from 'react';
const LABEL_10224 = 'component_10224';
export function Component10224({ value = 10224, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10224, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10224, 'data-value': derived.doubled }, children);
}
export default Component10224;
