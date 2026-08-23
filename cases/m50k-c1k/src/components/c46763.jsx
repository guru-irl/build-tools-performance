import React from 'react';
const LABEL_46763 = 'component_46763';
export function Component46763({ value = 46763, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46763, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46763, 'data-value': derived.doubled }, children);
}
export default Component46763;
