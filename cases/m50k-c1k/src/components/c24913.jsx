import React from 'react';
const LABEL_24913 = 'component_24913';
export function Component24913({ value = 24913, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24913, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24913, 'data-value': derived.doubled }, children);
}
export default Component24913;
