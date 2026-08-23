import React from 'react';
const LABEL_112 = 'component_112';
export function Component112({ value = 112, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_112, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_112, 'data-value': derived.doubled }, children);
}
export default Component112;
