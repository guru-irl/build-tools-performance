import React from 'react';
const LABEL_11112 = 'component_11112';
export function Component11112({ value = 11112, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11112, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11112, 'data-value': derived.doubled }, children);
}
export default Component11112;
