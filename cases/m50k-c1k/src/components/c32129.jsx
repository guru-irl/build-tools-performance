import React from 'react';
const LABEL_32129 = 'component_32129';
export function Component32129({ value = 32129, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32129, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32129, 'data-value': derived.doubled }, children);
}
export default Component32129;
