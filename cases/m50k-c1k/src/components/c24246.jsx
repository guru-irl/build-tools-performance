import React from 'react';
const LABEL_24246 = 'component_24246';
export function Component24246({ value = 24246, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24246, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24246, 'data-value': derived.doubled }, children);
}
export default Component24246;
