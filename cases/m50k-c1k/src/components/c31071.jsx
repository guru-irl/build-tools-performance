import React from 'react';
const LABEL_31071 = 'component_31071';
export function Component31071({ value = 31071, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31071, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31071, 'data-value': derived.doubled }, children);
}
export default Component31071;
