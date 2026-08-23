import React from 'react';
const LABEL_31853 = 'component_31853';
export function Component31853({ value = 31853, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31853, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31853, 'data-value': derived.doubled }, children);
}
export default Component31853;
