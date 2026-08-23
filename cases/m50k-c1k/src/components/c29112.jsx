import React from 'react';
const LABEL_29112 = 'component_29112';
export function Component29112({ value = 29112, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29112, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29112, 'data-value': derived.doubled }, children);
}
export default Component29112;
