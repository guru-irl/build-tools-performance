import React from 'react';
const LABEL_31302 = 'component_31302';
export function Component31302({ value = 31302, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31302, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31302, 'data-value': derived.doubled }, children);
}
export default Component31302;
