import React from 'react';
const LABEL_25335 = 'component_25335';
export function Component25335({ value = 25335, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25335, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25335, 'data-value': derived.doubled }, children);
}
export default Component25335;
