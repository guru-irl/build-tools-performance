import React from 'react';
const LABEL_23430 = 'component_23430';
export function Component23430({ value = 23430, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23430, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23430, 'data-value': derived.doubled }, children);
}
export default Component23430;
