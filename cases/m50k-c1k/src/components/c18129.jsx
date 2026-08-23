import React from 'react';
const LABEL_18129 = 'component_18129';
export function Component18129({ value = 18129, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18129, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18129, 'data-value': derived.doubled }, children);
}
export default Component18129;
