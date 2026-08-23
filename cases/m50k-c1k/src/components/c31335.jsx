import React from 'react';
const LABEL_31335 = 'component_31335';
export function Component31335({ value = 31335, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31335, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31335, 'data-value': derived.doubled }, children);
}
export default Component31335;
