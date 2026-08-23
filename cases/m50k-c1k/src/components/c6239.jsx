import React from 'react';
const LABEL_6239 = 'component_6239';
export function Component6239({ value = 6239, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6239, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6239, 'data-value': derived.doubled }, children);
}
export default Component6239;
