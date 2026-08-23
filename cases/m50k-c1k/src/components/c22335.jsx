import React from 'react';
const LABEL_22335 = 'component_22335';
export function Component22335({ value = 22335, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22335, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22335, 'data-value': derived.doubled }, children);
}
export default Component22335;
