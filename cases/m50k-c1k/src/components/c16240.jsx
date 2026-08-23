import React from 'react';
const LABEL_16240 = 'component_16240';
export function Component16240({ value = 16240, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16240, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16240, 'data-value': derived.doubled }, children);
}
export default Component16240;
