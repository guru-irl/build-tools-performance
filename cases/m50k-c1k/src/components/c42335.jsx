import React from 'react';
const LABEL_42335 = 'component_42335';
export function Component42335({ value = 42335, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42335, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42335, 'data-value': derived.doubled }, children);
}
export default Component42335;
