import React from 'react';
const LABEL_31778 = 'component_31778';
export function Component31778({ value = 31778, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31778, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31778, 'data-value': derived.doubled }, children);
}
export default Component31778;
