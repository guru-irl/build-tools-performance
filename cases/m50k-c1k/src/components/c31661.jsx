import React from 'react';
const LABEL_31661 = 'component_31661';
export function Component31661({ value = 31661, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31661, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31661, 'data-value': derived.doubled }, children);
}
export default Component31661;
