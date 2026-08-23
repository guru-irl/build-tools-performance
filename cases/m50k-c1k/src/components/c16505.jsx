import React from 'react';
const LABEL_16505 = 'component_16505';
export function Component16505({ value = 16505, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16505, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16505, 'data-value': derived.doubled }, children);
}
export default Component16505;
