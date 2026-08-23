import React from 'react';
const LABEL_32112 = 'component_32112';
export function Component32112({ value = 32112, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32112, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32112, 'data-value': derived.doubled }, children);
}
export default Component32112;
