import React from 'react';
const LABEL_6335 = 'component_6335';
export function Component6335({ value = 6335, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6335, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6335, 'data-value': derived.doubled }, children);
}
export default Component6335;
