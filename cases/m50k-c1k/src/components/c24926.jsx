import React from 'react';
const LABEL_24926 = 'component_24926';
export function Component24926({ value = 24926, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24926, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24926, 'data-value': derived.doubled }, children);
}
export default Component24926;
