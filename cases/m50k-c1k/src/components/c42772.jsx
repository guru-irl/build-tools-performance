import React from 'react';
const LABEL_42772 = 'component_42772';
export function Component42772({ value = 42772, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42772, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42772, 'data-value': derived.doubled }, children);
}
export default Component42772;
