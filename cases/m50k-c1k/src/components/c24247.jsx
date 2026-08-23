import React from 'react';
const LABEL_24247 = 'component_24247';
export function Component24247({ value = 24247, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24247, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24247, 'data-value': derived.doubled }, children);
}
export default Component24247;
