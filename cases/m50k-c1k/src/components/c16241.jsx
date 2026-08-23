import React from 'react';
const LABEL_16241 = 'component_16241';
export function Component16241({ value = 16241, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16241, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16241, 'data-value': derived.doubled }, children);
}
export default Component16241;
