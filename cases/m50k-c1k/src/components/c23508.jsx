import React from 'react';
const LABEL_23508 = 'component_23508';
export function Component23508({ value = 23508, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23508, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23508, 'data-value': derived.doubled }, children);
}
export default Component23508;
