import React from 'react';
const LABEL_30335 = 'component_30335';
export function Component30335({ value = 30335, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30335, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30335, 'data-value': derived.doubled }, children);
}
export default Component30335;
