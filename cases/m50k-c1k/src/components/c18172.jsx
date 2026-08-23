import React from 'react';
const LABEL_18172 = 'component_18172';
export function Component18172({ value = 18172, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18172, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18172, 'data-value': derived.doubled }, children);
}
export default Component18172;
