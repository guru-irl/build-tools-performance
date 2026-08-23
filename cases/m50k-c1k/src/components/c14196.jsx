import React from 'react';
const LABEL_14196 = 'component_14196';
export function Component14196({ value = 14196, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14196, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14196, 'data-value': derived.doubled }, children);
}
export default Component14196;
