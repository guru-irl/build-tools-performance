import React from 'react';
const LABEL_44335 = 'component_44335';
export function Component44335({ value = 44335, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44335, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44335, 'data-value': derived.doubled }, children);
}
export default Component44335;
