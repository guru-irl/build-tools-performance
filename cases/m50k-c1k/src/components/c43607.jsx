import React from 'react';
const LABEL_43607 = 'component_43607';
export function Component43607({ value = 43607, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43607, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43607, 'data-value': derived.doubled }, children);
}
export default Component43607;
