import React from 'react';
const LABEL_31643 = 'component_31643';
export function Component31643({ value = 31643, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31643, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31643, 'data-value': derived.doubled }, children);
}
export default Component31643;
