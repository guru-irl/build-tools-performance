import React from 'react';
const LABEL_24167 = 'component_24167';
export function Component24167({ value = 24167, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24167, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24167, 'data-value': derived.doubled }, children);
}
export default Component24167;
