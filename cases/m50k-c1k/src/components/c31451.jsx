import React from 'react';
const LABEL_31451 = 'component_31451';
export function Component31451({ value = 31451, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31451, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31451, 'data-value': derived.doubled }, children);
}
export default Component31451;
