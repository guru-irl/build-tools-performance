import React from 'react';
const LABEL_24532 = 'component_24532';
export function Component24532({ value = 24532, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24532, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24532, 'data-value': derived.doubled }, children);
}
export default Component24532;
