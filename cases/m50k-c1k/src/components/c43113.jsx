import React from 'react';
const LABEL_43113 = 'component_43113';
export function Component43113({ value = 43113, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43113, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43113, 'data-value': derived.doubled }, children);
}
export default Component43113;
