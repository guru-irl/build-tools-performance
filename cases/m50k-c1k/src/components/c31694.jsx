import React from 'react';
const LABEL_31694 = 'component_31694';
export function Component31694({ value = 31694, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31694, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31694, 'data-value': derived.doubled }, children);
}
export default Component31694;
