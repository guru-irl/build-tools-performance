import React from 'react';
const LABEL_31063 = 'component_31063';
export function Component31063({ value = 31063, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31063, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31063, 'data-value': derived.doubled }, children);
}
export default Component31063;
