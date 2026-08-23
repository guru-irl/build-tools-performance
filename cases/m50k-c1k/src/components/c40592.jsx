import React from 'react';
const LABEL_40592 = 'component_40592';
export function Component40592({ value = 40592, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40592, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40592, 'data-value': derived.doubled }, children);
}
export default Component40592;
