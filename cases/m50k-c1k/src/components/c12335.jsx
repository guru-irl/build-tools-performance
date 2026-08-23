import React from 'react';
const LABEL_12335 = 'component_12335';
export function Component12335({ value = 12335, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12335, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12335, 'data-value': derived.doubled }, children);
}
export default Component12335;
