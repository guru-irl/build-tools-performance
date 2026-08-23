import React from 'react';
const LABEL_14694 = 'component_14694';
export function Component14694({ value = 14694, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14694, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14694, 'data-value': derived.doubled }, children);
}
export default Component14694;
