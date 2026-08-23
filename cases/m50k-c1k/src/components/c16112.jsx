import React from 'react';
const LABEL_16112 = 'component_16112';
export function Component16112({ value = 16112, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16112, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16112, 'data-value': derived.doubled }, children);
}
export default Component16112;
