import React from 'react';
const LABEL_16176 = 'component_16176';
export function Component16176({ value = 16176, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16176, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16176, 'data-value': derived.doubled }, children);
}
export default Component16176;
