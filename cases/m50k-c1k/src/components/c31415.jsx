import React from 'react';
const LABEL_31415 = 'component_31415';
export function Component31415({ value = 31415, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31415, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31415, 'data-value': derived.doubled }, children);
}
export default Component31415;
