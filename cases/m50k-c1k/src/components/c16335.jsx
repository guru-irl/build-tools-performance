import React from 'react';
const LABEL_16335 = 'component_16335';
export function Component16335({ value = 16335, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16335, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16335, 'data-value': derived.doubled }, children);
}
export default Component16335;
