import React from 'react';
const LABEL_216 = 'component_216';
export function Component216({ value = 216, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_216, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_216, 'data-value': derived.doubled }, children);
}
export default Component216;
