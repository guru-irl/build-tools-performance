import React from 'react';
const LABEL_37084 = 'component_37084';
export function Component37084({ value = 37084, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37084, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37084, 'data-value': derived.doubled }, children);
}
export default Component37084;
