import React from 'react';
const LABEL_31172 = 'component_31172';
export function Component31172({ value = 31172, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31172, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31172, 'data-value': derived.doubled }, children);
}
export default Component31172;
