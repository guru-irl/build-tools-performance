import React from 'react';
const LABEL_16502 = 'component_16502';
export function Component16502({ value = 16502, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16502, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16502, 'data-value': derived.doubled }, children);
}
export default Component16502;
