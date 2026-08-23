import React from 'react';
const LABEL_16006 = 'component_16006';
export function Component16006({ value = 16006, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16006, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16006, 'data-value': derived.doubled }, children);
}
export default Component16006;
