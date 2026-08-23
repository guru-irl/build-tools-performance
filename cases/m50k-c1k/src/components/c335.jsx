import React from 'react';
const LABEL_335 = 'component_335';
export function Component335({ value = 335, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_335, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_335, 'data-value': derived.doubled }, children);
}
export default Component335;
