import React from 'react';
const LABEL_13335 = 'component_13335';
export function Component13335({ value = 13335, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13335, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13335, 'data-value': derived.doubled }, children);
}
export default Component13335;
