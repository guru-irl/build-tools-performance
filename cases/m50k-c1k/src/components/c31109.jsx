import React from 'react';
const LABEL_31109 = 'component_31109';
export function Component31109({ value = 31109, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31109, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31109, 'data-value': derived.doubled }, children);
}
export default Component31109;
