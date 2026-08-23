import React from 'react';
const LABEL_16657 = 'component_16657';
export function Component16657({ value = 16657, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16657, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16657, 'data-value': derived.doubled }, children);
}
export default Component16657;
