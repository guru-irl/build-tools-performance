import React from 'react';
const LABEL_28808 = 'component_28808';
export function Component28808({ value = 28808, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28808, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28808, 'data-value': derived.doubled }, children);
}
export default Component28808;
