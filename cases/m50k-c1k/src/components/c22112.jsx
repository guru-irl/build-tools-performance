import React from 'react';
const LABEL_22112 = 'component_22112';
export function Component22112({ value = 22112, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22112, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22112, 'data-value': derived.doubled }, children);
}
export default Component22112;
