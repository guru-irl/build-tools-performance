import React from 'react';
const LABEL_32592 = 'component_32592';
export function Component32592({ value = 32592, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32592, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32592, 'data-value': derived.doubled }, children);
}
export default Component32592;
