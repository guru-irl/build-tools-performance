import React from 'react';
const LABEL_13547 = 'component_13547';
export function Component13547({ value = 13547, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13547, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13547, 'data-value': derived.doubled }, children);
}
export default Component13547;
