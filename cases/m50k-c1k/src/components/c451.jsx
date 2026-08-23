import React from 'react';
const LABEL_451 = 'component_451';
export function Component451({ value = 451, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_451, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_451, 'data-value': derived.doubled }, children);
}
export default Component451;
