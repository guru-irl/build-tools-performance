import React from 'react';
const LABEL_32257 = 'component_32257';
export function Component32257({ value = 32257, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32257, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32257, 'data-value': derived.doubled }, children);
}
export default Component32257;
