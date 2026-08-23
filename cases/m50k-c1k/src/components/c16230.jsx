import React from 'react';
const LABEL_16230 = 'component_16230';
export function Component16230({ value = 16230, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16230, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16230, 'data-value': derived.doubled }, children);
}
export default Component16230;
