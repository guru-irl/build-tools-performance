import React from 'react';
const LABEL_43103 = 'component_43103';
export function Component43103({ value = 43103, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43103, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43103, 'data-value': derived.doubled }, children);
}
export default Component43103;
