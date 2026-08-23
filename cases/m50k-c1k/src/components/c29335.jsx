import React from 'react';
const LABEL_29335 = 'component_29335';
export function Component29335({ value = 29335, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29335, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29335, 'data-value': derived.doubled }, children);
}
export default Component29335;
