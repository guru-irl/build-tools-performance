import React from 'react';
const LABEL_18112 = 'component_18112';
export function Component18112({ value = 18112, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18112, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18112, 'data-value': derived.doubled }, children);
}
export default Component18112;
