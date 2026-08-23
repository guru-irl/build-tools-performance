import React from 'react';
const LABEL_25112 = 'component_25112';
export function Component25112({ value = 25112, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25112, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25112, 'data-value': derived.doubled }, children);
}
export default Component25112;
