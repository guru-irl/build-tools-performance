import React from 'react';
const LABEL_14735 = 'component_14735';
export function Component14735({ value = 14735, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14735, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14735, 'data-value': derived.doubled }, children);
}
export default Component14735;
