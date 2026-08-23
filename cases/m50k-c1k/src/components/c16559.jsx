import React from 'react';
const LABEL_16559 = 'component_16559';
export function Component16559({ value = 16559, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16559, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16559, 'data-value': derived.doubled }, children);
}
export default Component16559;
