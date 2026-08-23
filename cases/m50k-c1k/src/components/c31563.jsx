import React from 'react';
const LABEL_31563 = 'component_31563';
export function Component31563({ value = 31563, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31563, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31563, 'data-value': derived.doubled }, children);
}
export default Component31563;
