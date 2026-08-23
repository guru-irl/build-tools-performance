import React from 'react';
const LABEL_5335 = 'component_5335';
export function Component5335({ value = 5335, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5335, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5335, 'data-value': derived.doubled }, children);
}
export default Component5335;
