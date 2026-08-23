import React from 'react';
const LABEL_14781 = 'component_14781';
export function Component14781({ value = 14781, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14781, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14781, 'data-value': derived.doubled }, children);
}
export default Component14781;
