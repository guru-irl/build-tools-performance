import React from 'react';
const LABEL_31129 = 'component_31129';
export function Component31129({ value = 31129, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31129, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31129, 'data-value': derived.doubled }, children);
}
export default Component31129;
