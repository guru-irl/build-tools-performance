import React from 'react';
const LABEL_13463 = 'component_13463';
export function Component13463({ value = 13463, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13463, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13463, 'data-value': derived.doubled }, children);
}
export default Component13463;
