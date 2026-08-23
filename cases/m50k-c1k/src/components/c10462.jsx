import React from 'react';
const LABEL_10462 = 'component_10462';
export function Component10462({ value = 10462, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10462, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10462, 'data-value': derived.doubled }, children);
}
export default Component10462;
