import React from 'react';
const LABEL_31377 = 'component_31377';
export function Component31377({ value = 31377, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31377, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31377, 'data-value': derived.doubled }, children);
}
export default Component31377;
