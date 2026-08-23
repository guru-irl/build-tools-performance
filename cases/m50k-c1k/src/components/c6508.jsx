import React from 'react';
const LABEL_6508 = 'component_6508';
export function Component6508({ value = 6508, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6508, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6508, 'data-value': derived.doubled }, children);
}
export default Component6508;
