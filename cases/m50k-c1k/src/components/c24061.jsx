import React from 'react';
const LABEL_24061 = 'component_24061';
export function Component24061({ value = 24061, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24061, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24061, 'data-value': derived.doubled }, children);
}
export default Component24061;
