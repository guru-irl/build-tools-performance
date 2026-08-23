import React from 'react';
const LABEL_16508 = 'component_16508';
export function Component16508({ value = 16508, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16508, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16508, 'data-value': derived.doubled }, children);
}
export default Component16508;
