import React from 'react';
const LABEL_28707 = 'component_28707';
export function Component28707({ value = 28707, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28707, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28707, 'data-value': derived.doubled }, children);
}
export default Component28707;
