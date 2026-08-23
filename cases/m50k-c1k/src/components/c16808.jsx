import React from 'react';
const LABEL_16808 = 'component_16808';
export function Component16808({ value = 16808, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16808, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16808, 'data-value': derived.doubled }, children);
}
export default Component16808;
