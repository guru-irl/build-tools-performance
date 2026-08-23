import React from 'react';
const LABEL_14237 = 'component_14237';
export function Component14237({ value = 14237, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14237, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14237, 'data-value': derived.doubled }, children);
}
export default Component14237;
