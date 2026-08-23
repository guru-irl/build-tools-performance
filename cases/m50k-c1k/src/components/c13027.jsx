import React from 'react';
const LABEL_13027 = 'component_13027';
export function Component13027({ value = 13027, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13027, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13027, 'data-value': derived.doubled }, children);
}
export default Component13027;
