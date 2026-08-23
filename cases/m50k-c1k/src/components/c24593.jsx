import React from 'react';
const LABEL_24593 = 'component_24593';
export function Component24593({ value = 24593, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24593, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24593, 'data-value': derived.doubled }, children);
}
export default Component24593;
