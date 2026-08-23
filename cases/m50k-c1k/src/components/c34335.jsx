import React from 'react';
const LABEL_34335 = 'component_34335';
export function Component34335({ value = 34335, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34335, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34335, 'data-value': derived.doubled }, children);
}
export default Component34335;
