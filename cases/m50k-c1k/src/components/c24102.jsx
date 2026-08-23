import React from 'react';
const LABEL_24102 = 'component_24102';
export function Component24102({ value = 24102, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24102, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24102, 'data-value': derived.doubled }, children);
}
export default Component24102;
